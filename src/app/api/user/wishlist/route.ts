import prisma from "@/lib/prisma";
import { verifyJwt, validateAccessToken } from "@/lib/jwt";

// model Wishlist {
//     id        Int        @id @default(autoincrement())
//     updatedAt DateTime   @updatedAt
//     userId    Int
//     user      User       @relation(fields: [userId], references: [id])
//     productId Int
//     product   Product    @relation(fields: [productId], references: [id])
//   }

interface RequestBody {
  userId: number;
  productId: number;
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
  const wishlist = await prisma.wishlist.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });

  return new Response(JSON.stringify(wishlist));
}
