import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

// get user
export async function GET(request: Request,
    { params }: { params: { userId: number } }
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

    
    if(userId !== +params.userId) {
      return new Response(
        JSON.stringify({
          error: "You are not authorized to view this user",
        }),
        {
          status: 401,
        }
      );
    }

    // dont send password
   
    const user = await prisma.user.findFirst({
      where: {
        id: +params.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        address: true,
        Wishlist: true,
        cartItems: true,
        orders: true,
        Review: true
      },
    });






  
    return new Response(JSON.stringify(user));
  
  }
  