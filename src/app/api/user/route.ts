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

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      address
      
    },
  });

  const result = {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
  };

  return new Response(JSON.stringify(result));
}

