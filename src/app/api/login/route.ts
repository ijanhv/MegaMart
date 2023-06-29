// import { signJwtAccessToken } from "@/lib/jwt";
// import prisma from "@/lib/prisma";
// import * as bcrypt from "bcrypt";
// import { NextResponse } from "next/server";
// import nookies from "nookies";

// interface RequestBody {
//   email: string;
//   password: string;
// }
// export async function POST(request: Request) {
//   const body: RequestBody = await request.json();

//   // if fields are empty
//   if (!body.email || !body.password) {
//     return NextResponse.json(
//       { message: "Please enter email and password" },
//       { status: 404 }
//     );
//   }

//   // if user not found

//   const user = await prisma.user.findFirst({
//     where: {
//       email: body.email,
//     },
//   });

//   if (!user)
//     return NextResponse.json({ message: "User not found" }, { status: 404 });

//   if (user && !(await bcrypt.compare(body.password, user.password))) {
//     // send error message and status
//     return NextResponse.json(
//       { message: "Incorrect email or password" },
//       { status: 404 }
//     );
//   }

//   if (user && (await bcrypt.compare(body.password, user.password))) {
//     const { password, ...userWithoutPass } = user;
//     console.log("userWithoutPass", userWithoutPass);
//     const accessToken = signJwtAccessToken(userWithoutPass);

  
   
//     const result = {
//       ...userWithoutPass,
//       accessToken,
//     };
//     return new Response(JSON.stringify(result));
//   } else return new Response(JSON.stringify(null));
// }

import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}