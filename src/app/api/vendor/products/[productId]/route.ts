import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

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
  id_vendorId: number;
}

//get one product

export async function GET(
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

  console.log(params.productId);

  const product = await prisma.product.findFirst({
    where: {
      id: +params.productId,
      vendorId: userId,
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

  return new Response(JSON.stringify(product));
}

export async function PUT(
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

  const body: RequestBody = await request.json();

  const product = await prisma.product.update({
    where: {
      id: +params.productId,
    },
    data: {
      ...body,
    },
  });

  return new Response(JSON.stringify(product));
}

// delete one product that belongs to the vendor

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

  const product = await prisma.product.findFirst({
    where: {
      id: +params.productId,
      vendorId: userId,
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

  const deletedProduct = await prisma.product.delete({
    where: {
      id: +params.productId,
    },
  });

  return new Response(JSON.stringify(deletedProduct));
}
