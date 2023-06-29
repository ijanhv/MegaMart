import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";


// Get all products

export async function GET(request: Request) {
    const userId = await validateAccessToken(request);

    const allProducts = await prisma.product.findMany();
    
    return new Response(JSON.stringify(allProducts));
 }

 