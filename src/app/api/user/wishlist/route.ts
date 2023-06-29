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

// Add product to wishlist
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

  const wishlist = await prisma.wishlist.create({
    data: {
      productId,
      userId,
    },
  });

  return new Response(JSON.stringify(wishlist));
}

// Remove product from wishlist

export async function DELETE(
  request: Request,
  { params }: { params: { productId: number } }
) {
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

  const productId = +params.productId;

  const wishlistItem = await prisma.wishlist.findFirst({
    where: {
      userId,
      productId,
    },
  });

  if (!wishlistItem) {
    return new Response(
      JSON.stringify({
        error: "product not found",
      }),
      {
        status: 404,
      }
    );
  }

  const wishlist = await prisma.wishlist.delete({
    where: {
      id: wishlistItem.id,
    },
  });

  return new Response(JSON.stringify(wishlist));
}
