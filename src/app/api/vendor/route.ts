// login register for vendor
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { validateAccessToken } from "@/lib/jwt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
  address: string;
}

//get current vendor from local storage

export async function GET(request: Request) {
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

  const vendor = await prisma.vendor.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
      role: true,
      products: true,
    },

  });

  if (!vendor) {
    return new Response(
      JSON.stringify({
        error: "vendor not found",
      }),
      {
        status: 404,
      }
    );
  }

 

  return new Response(JSON.stringify(vendor));
}




export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const { name, email, password, address } = body;

//   const vendorExists = await prisma.vendor.findUnique({
//     where: {
//       email: body.email,
//     },
//   });

//   if (vendorExists) {
//     return new Response(
//       JSON.stringify({
//         error: "email already exists",
//       }),
//       {
//         status: 400,
//       }
//     );
//   }
  const vendor = await prisma.vendor.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      address,
    },
  });

  const result = {
    id: vendor.id,
    name: vendor.name,
    email: vendor.email,
    address: vendor.address,
  };

  return new Response(JSON.stringify(result));
}


