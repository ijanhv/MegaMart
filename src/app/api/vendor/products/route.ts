import prisma from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";

interface RequestBody {
  name: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  vendorId: number;
}

async function validateAccessToken(request: Request): Promise<number | null> {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return null;
  }
  const decodedToken = verifyJwt(accessToken);
  console.log("decodedToken", decodedToken);
  return decodedToken?.id;
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

  if (user?.role !== 'VENDOR') {
    return new Response(
      JSON.stringify({
        error: "forbidden",
      }),
      {
        status: 403,
      }
    );
  }

  const body: RequestBody = await request.json();

  const product = await prisma.product.create({
    data: {
      ...body,
      vendorId: userId,
    },
  });

  return new Response(JSON.stringify(product));
}

// export async function POST(request: Request) {
//   const token = await validateAccessToken(request);
//   console.log("userId", vendorId);
//   if (!userId) {
//     return new Response(
//       JSON.stringify({
//         error: "unauthorized",
//       }),
//       {
//         status: 401,
//       }
//     );
//   }

//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   if (user?.role !== "VENDOR") {
//     return new Response(
//       JSON.stringify({
//         error: "forbidden",
//       }),
//       {
//         status: 403,
//       }
//     );
//   }

//   const body: RequestBody = await request.json();

//   const product = await prisma.product.create({
//     data: {
//       ...body,
//       vendorId: userId,
//     },
//   });

//   return new Response(JSON.stringify(product));
// }

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
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
      id: userId,
    },
  });

  if (user?.role !== "VENDOR") {
    return new Response(
      JSON.stringify({
        error: "forbidden",
      }),
      {
        status: 403,
      }
    );
  }

  const body: RequestBody = await request.json();

  const product = await prisma.product.update({
    where: {
      id: +params.id,
    },
    data: {
      ...body,
    },
  });

  return new Response(JSON.stringify(product));
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
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
      id: userId,
    },
  });

  if (user?.role !== "VENDOR") {
    return new Response(
      JSON.stringify({
        error: "forbidden",
      }),
      {
        status: 403,
      }
    );
  }

  const product = await prisma.product.delete({
    where: {
      id: +params.id,
    },
  });

  return new Response(JSON.stringify(product));
}


// give description of this application
// MegaMart is an online shopping platform that allows vendors to sell their products to customers.