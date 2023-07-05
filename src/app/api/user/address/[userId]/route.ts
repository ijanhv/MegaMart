import prisma from "@/lib/prisma";
import { validateAccessToken } from "@/lib/jwt";

// get user address
export async function GET(
  request: Request,
  { params }: { params: { userId: number } }
) {
  const userId = await validateAccessToken(request);

  if (!userId || userId !== +params.userId) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const address = await prisma.address.findFirst({
    where: {
      userId: +params.userId,
    },
  });

  if (!address) {
    return new Response(
      JSON.stringify({
        error: "Address not found",
      }),
      {
        status: 404,
      }
    );
  }

  return new Response(JSON.stringify(address));
}

// create user address
export async function POST(
  request: Request,
  { params }: { params: { userId: number } }
) {
  const userId = await validateAccessToken(request);
  if (!userId || userId !== +params.userId) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const { street, city, state, country, zipcode } = await request.json();

  const address = await prisma.address.create({
    data: {
      street,
      city,
      state,
      country,
      zipcode,
      userId: userId,
    },
  });

  return new Response(JSON.stringify(address));
}

// update user address

export async function PUT(
  request: Request,
  { params }: { params: { userId: number } }
) {
  const userId = await validateAccessToken(request);
  if (!userId || userId !== +params.userId) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const address = await prisma.address.findFirst({
    where: {
      userId: +params.userId,
    },
  });

  if (!address) {
    return new Response(
      JSON.stringify({
        error: "Address not found",
      }),
      {
        status: 404,
      }
    );
  }

  const { street, city, state, country, zipcode } = await request.json();

  const updatedAddress = await prisma.address.update({
    where: {
      id: address.id,
    },
    data: {
      street,
      city,
      state,
      country,
      zipcode,
    },
  });

  return new Response(JSON.stringify(updatedAddress));
}
