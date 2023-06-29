import prisma from "@/lib/prisma";
import { verifyJwt, validateAccessToken } from "@/lib/jwt";

interface RequestBody {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  brand: string;
  color: string;
  size: string;
  isFeatured: boolean;
  inventory: number;
  vendorId: number;
}



export async function GET(request: Request) {
  const userId = await validateAccessToken(request);

  const products = await prisma.product.findMany({
    where: {
      vendorId: userId,
    },
  });

  return new Response(JSON.stringify(products));
}

export async function POST(request: Request) {
  const userId = await validateAccessToken(request);

  console.log("userId", userId);
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

  const user = await prisma.vendor.findUnique({
    where: {
      id: userId,
    },
  });

  const body: RequestBody = await request.json();

  const product = await prisma.product.create({
    data: {
      ...body,
      vendorId: userId,
    },
  });

  // increment product count
  await prisma.vendor.update({
    where: {
      id: userId,
    },
    data: {
      numberOfProducts: user!.numberOfProducts + 1,
    },
  });

  return new Response(JSON.stringify(product));
}

