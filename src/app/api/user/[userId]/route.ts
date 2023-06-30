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
  
    const user = await prisma.user.findUnique({
      where: {
        id: +params.userId
      },
      include: {
        cartItems: true,
        Wishlist: true,
      },
    });
  
    return new Response(JSON.stringify(user));
  
  }
  