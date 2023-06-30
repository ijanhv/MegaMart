import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
  address: string;
  id: number;

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


// Update user
export async function PUT(request: Request) {
  const body: RequestBody = await request.json();
  const { name, email, password, address } = body;

  const user = await prisma.user.update({
    where: {
      email,
    },
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


// Delete user
export async function DELETE(request: Request) {
  const body: RequestBody = await request.json();
  const { email } = body;

  const user = await prisma.user.delete({
    where: {
      email,
    },
  });

  // send message to user
  const result = {
    message: `User ${user.name} has been deleted`,
  };

  return new Response(JSON.stringify(result));
}
