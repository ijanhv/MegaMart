import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

// export async function GET(request: Request, { params }: { params: { id: number } }) {
//   const accessToken = request.headers.get("authorization");
//   if (!accessToken || !verifyJwt(accessToken)) {
//     return new Response(
//       JSON.stringify({
//         error: "unauthorized",
//       }),
//       {
//         status: 401,
//       }
//     );
//   }

//   const userPosts = await prisma.post.findMany({
//     where: { authorId: +params.id },
//     include: {
//       author: {
//         select: {
//           email: true,
//           name: true,
//         },
//       },
//     },
//   });

//   return new Response(JSON.stringify(userPosts));
// }

// // create post

// interface RequestBody {
//   title: string;
//   content: string;
// }

// export async function POST(request: Request, { params }: { params: { id: number } }) {
//   const accessToken = request.headers.get("authorization");
//   if (!accessToken || !verifyJwt(accessToken)) {
//     return new Response(
//       JSON.stringify({
//         error: "unauthorized",
//       }),
//       {
//         status: 401,
//       }
//     );
//   }

//   const body: RequestBody = await request.json();

//   const post = await prisma.post.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       authorId: +params.id,
//     },
//   });

//   return new Response(JSON.stringify(post));
// }