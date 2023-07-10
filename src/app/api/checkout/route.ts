import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { validateAccessToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { orderItems } = await request.json();

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  orderItems.forEach((item: any) => {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "USD",
        product_data: {
          name: item.name,
        },
        // unit_amount:
      },
    });
  });

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

  //   // Order model
  // model Order {
  //     id        Int          @id @default(autoincrement())
  //     updatedAt DateTime     @updatedAt
  //     total     Float
  //     userId    Int
  //     user      User         @relation(fields: [userId], references: [id])
  //     items     OrderItems[]
  //     createdAt DateTime     @default(now())
  //     address   Address[]
  //     isPaid    Boolean      @default(false)
  //   }

  //   model OrderItems {
  //     id        Int      @id @default(autoincrement())
  //     updatedAt DateTime @updatedAt
  //     quantity  Int
  //     productId Int
  //     product   Product  @relation(fields: [productId], references: [id])
  //     Order     Order    @relation(fields: [orderId], references: [id])
  //     orderId   Int
  //   }
  const totalPrice = orderItems.data.reduce(
    (acc: any, item: any) => acc + item.product.price * item.quantity,
    0
  );


  const order = await prisma.order.create({
    data: {
      total: totalPrice,
      userId: userId,
      items: {
        create: orderItems.map((item: any) => ({
          quantity: item.quantity,
          product: {
            connect: {
              id: item.productId,
            },
          },
        })),
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `http://localhost:3000//cart?success=1`,
    cancel_url: `http://localhost:3000//cart?canceled=1`,
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json({ url: session.url });
}
