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
    include: {
      product: true,
      user: true,
    },
  });

  return new Response(JSON.stringify(cartItems));
}

