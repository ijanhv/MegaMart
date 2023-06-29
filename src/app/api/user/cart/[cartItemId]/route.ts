import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";


// Reomve product from cart
export async function DELETE(request: Request,
    { params }: { params: { cartItemId: number } }
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
  
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: +params.cartItemId,
        userId,
      },
    });

    if (!cartItem) {
        return new Response(
          JSON.stringify({
            error: "Your cart is empty",
          }),
          {
            status: 404,
          }
        );
      }

    await prisma.cartItem.delete({
      where: {
        id: +params.cartItemId,
      },
    });
  
    return new Response(JSON.stringify(cartItem));
  }
  