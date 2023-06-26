// login register for vendor
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
  address: string;
}

// get hello
export async function GET() {
  return new Response(JSON.stringify({ hello: "world" }));
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
