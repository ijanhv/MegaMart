import { signJwtAccessToken, verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
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
    // set cookies
    // const decoded =  verifyJwt(accessToken);
    // console.log("decoded", decoded);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}