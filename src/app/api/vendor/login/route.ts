import { signJwtAccessToken, verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;

}
export async function POST(request: NextRequest, ) {
  const body: RequestBody = await request.json();

  const vendor = await prisma.vendor.findFirst({
    where: {
      email: body.email,
    },
  });

  if (vendor && (await bcrypt.compare(body.password, vendor.password))) {
    const { password, ...userWithoutPass } = vendor;
    console.log("userWithoutPass", userWithoutPass);
    const accessToken = signJwtAccessToken(userWithoutPass);
    

    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}