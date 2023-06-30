import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

interface RequestBody {
  quantity: number;
}

// Reomve product from cart

export async function DELETE(
  request: Request,
  { params }: { params: { cartItemId: number } }
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

  const cartItem = await prisma.cartItem.findFirst({
    where: {
      id: +params.cartItemId,
      userId,
    },
  });

  if (!cartItem) {
    return new Response(
      JSON.stringify({
        error: "Your cart is empty",
      }),
      {
        status: 404,
      }
    );
  }

  await prisma.cartItem.delete({
    where: {
      id: +params.cartItemId,
    },
  });

  return new Response(JSON.stringify(cartItem));
}

// Add product to cart
// export async function POST(request: Request,
//   { params }: { params: { productId: number } }
//   ) {
//   const userId = await validateAccessToken(request);

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

//   const product = await prisma.product.findUnique({
//     where: {
//       id: +params.productId,
//     },
//   });

//   if (!product) {
//     return new Response(
//       JSON.stringify({
//         error: "product not found",
//       }),
//       {
//         status: 404,
//       }
//     );
//   }

//   // if product already in cart increase the count
//   const cartItem = await prisma.cartItem.findUnique({
//     where: {
//       productId_userId: {
//         productId: +params.productId,
//         userId: userId,
//     }}
//   });

//   console.log(cartItem);

//   if (cartItem) {
//     await prisma.cartItem.update({
//       where: {
//         id: cartItem.id,
//       },
//       data: {
//         quantity: cartItem.quantity ++,
//       },
//     });

//     return new Response(JSON.stringify(cartItem));
//   }

//   // add to cart item

//   // request body

//   if(!cartItem) {
//     const cartItem = await prisma.cartItem.create({
//       data: {
//         quantity: 1,
//         productId: +params.productId,
//         userId: userId,
//       },
//     });

//     return new Response(JSON.stringify(cartItem));
//   }
// }

// Add product to cart

export async function POST(
  request: Request,
  { params }: { params: { productId: number } }
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

  const product = await prisma.product.findUnique({
    where: {
      id: +params.productId,
    },
  });

  if (!product) {
    return new Response(
      JSON.stringify({
        error: "product not found",
      }),
      {
        status: 404,
      }
    );
  }

  const newCartItem = await prisma.cartItem.create({
    data: {
      quantity: 1,
      productId: +params.productId,
      userId: userId,
    },
  });

  return new Response(JSON.stringify(newCartItem));
}



// Update quantity of product in cart
export async function PUT(
  request: Request,
  { params }: { params: { productId: number } }
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

  const cartItem = await prisma.cartItem.findFirst({
    where: {
      productId: +params.productId,
      userId,
    },
  });

  console.log("This is the cart item to be updated", cartItem);

  if (!cartItem) {
    return new Response(
      JSON.stringify({
        error: "Your cart is empty",
      }),
      {
        status: 404,
      }
    );
  }

  console.log("quantity", cartItem.quantity);


  const body: RequestBody = await request.json();
  const { quantity } = body;
  console.log("body quantity", quantity);

  const newQuantity = cartItem.quantity +  quantity;
  
  if (cartItem) {
    await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: newQuantity
      },
    });

    console.log("This is the updated cart item", cartItem);
  }

  return new Response(JSON.stringify(cartItem));


}
