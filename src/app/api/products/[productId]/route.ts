import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";



// Get one product

export async function GET(request: Request,
    { params }: { params: { productId: number } }
    ) {

    const userId = await validateAccessToken(request);
    console.log("userId", userId);

    const user = await prisma.user.findFirst({
        where: {
            id: userId!,
        },
    });


    if(user?.role === 'USER' || user?.role === 'ADMIN') {
    const product = await prisma.product.findFirst({
      where: {
        id: +params.productId,
      },
    });

    return new Response(JSON.stringify(product));
  }

    return new Response(
        JSON.stringify({
            error: "unauthorized",
        }),
        {
            status: 401,

        }
    );
    
    
 }