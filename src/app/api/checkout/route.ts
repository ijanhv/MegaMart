import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { validateAccessToken } from "@/lib/jwt";

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  userId: number;
  updatedAt: Date;
}


interface RequestBody {
  cartItems: CartItem[];
}


export async function POST(request: Request) {
  const body = await request.json();
  const { cartItems } = body;

  const userId = await validateAccessToken(request);
  if (!userId) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      Address: true,
    },
  });

  const productIds = cartItems.map((cartItem: any) => cartItem.productId);

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const totalPrice = products.reduce((total, product) => {
    const cartItem = cartItems.find(
      (cartItem: any) => cartItem.productId === product.id
    );

    if (!cartItem) {
      return total;
    }

    return total + product.price * cartItem.quantity;
  }, 0);

  const addressId = user?.Address[0].id;

  const cartIds = cartItems.map((cartItem: any) => cartItem.id);


  const order = await prisma.order.create({
    data: {
      total: totalPrice,
      userId,
      addressId,
      items: {
        create: cartItems.map((cartItem: any) => ({
          quantity: cartItem.quantity,
          cartItemId: cartItem.id,
        })),
      },
      isPaid: false,
    },
  });
  console.log(order);

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  cartItems.forEach((cartItem: any) => {
    const product = products.find(
      (product) => product.id === cartItem.productId
    );
      
    if (!product) {
      return;
    }

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          images: [product.imageUrl],
        },
        unit_amount: product.price * 100,
      },
      quantity: cartItem.quantity,
    });
  });


  

  // model Order {
  //   id        Int        @id @default(autoincrement())
  //   updatedAt DateTime   @updatedAt
  //   total     Float
  //   userId    Int
  //   user      User       @relation(fields: [userId], references: [id])
  //   items     CartItem[]
  //   createdAt DateTime   @default(now())
  //   addressId Int?
  //   address   Address[]
  //   isPaid    Boolean    @default(false)
  // }

  const session = await stripe.checkout.sessions.create({
    line_items: line_items, // You can add line items if needed
    mode: "payment",
    billing_address_collection: "auto",
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1NTK5kSB84mCMsrln9X3Ps4x",
      },
    ],
    success_url: `http://localhost:3000`,
    cancel_url: `http://localhost:3000/cart?canceled=1`,
    metadata: {
      orderId: order.id,
    },
  });

 //delete items from cart

 

  return NextResponse.json({ url: session.url });
}
