import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

// Add product to wishlist
export async function POST(
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

  const product = await prisma.product.findUnique({
    where: {
      id: +params.productId,
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

  // if product already in wishlist

  const wishlistItem = await prisma.wishlist.findFirst({
    where: {
      productId: +params.productId,
      userId: userId,
    },
  });

  if (wishlistItem) {
    return new Response(
      JSON.stringify({
        error: "Product already in wishlist",
      }),
      {
        status: 409,
      }
    );
  }

  const wishlist = await prisma.wishlist.create({
    data: {
      productId: +params.productId,
      userId,
    },
  });

  return new Response(JSON.stringify(wishlist));
}

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

  const wishlistItem = await prisma.wishlist.findFirst({
    where: {
      id: +params.productId,
    },
  });

  console.log("this is the wishlist item", wishlistItem);

  if (!wishlistItem) {
    return new Response(
      JSON.stringify({
        error: "wishlist item not found",
      }),
      {
        status: 404,
      }
    );
  }

  if (wishlistItem.userId !== userId) {
    return new Response(
      JSON.stringify({
        error: "You cannot delete other user's wishlist item",
      }),
      {
        status: 401,
      }
    );
  }

  await prisma.wishlist.delete({
    where: {
      id: +params.productId,
    },
  });

  return new Response(JSON.stringify("wishlist item deleted"));
}
