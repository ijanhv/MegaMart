import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function DELETE(
    request: Request,
    { params }: { params: { wishlistItemId: number } }
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
        id: +params.wishlistItemId,
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
        id: +params.wishlistItemId,
      },
    });
  
    return new Response(JSON.stringify("wishlist item deleted"));
  }
  