import prisma from "@/lib/prisma";
import { verifyJwt, validateAccessToken } from "@/lib/jwt";

// model CartItem {
//     id        Int      @id @default(autoincrement())
//     updatedAt DateTime @updatedAt
//     quantity  Int
//     productId Int
//     orderId   Int?
//     order     Order?   @relation(fields: [orderId], references: [id])
//     userId    Int
//     user      User     @relation(fields: [userId], references: [id])
//   }

interface RequestBody {
  userId: number;
  productId: number;
  productId_userId: number;
}

export async function GET(request: Request) {
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

  const cartItems = await prisma.cartItem.findMany({
    where: {
      userId,
    },
  });

  return new Response(JSON.stringify(cartItems));
}

// Add product to cart
export async function POST(request: Request) {
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

  const body: RequestBody = await request.json();
  const { productId } = body;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return new Response(
      JSON.stringify({
        error: "product not found",
      }),
      {
        status: 404,
      }
    );
  }

  // if product already in cart increase the count
  const cartItem = await prisma.cartItem.findUnique({
    where: {
      productId_userId: {
        productId: productId,
        userId: userId,
      },
    },
  });

  console.log(cartItem);

  if (cartItem) {
    await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: cartItem.quantity ++,
      },
    });

    return new Response(JSON.stringify(cartItem));
  }

  // add to cart item
  if (!cartItem) {
    const cartItem = await prisma.cartItem.create({
      data: {
        quantity: 1,
        productId,
        userId,
      },
    });

    return new Response(JSON.stringify(cartItem));
  }
}

