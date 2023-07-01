import { validateAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";



// Get all products

// export async function GET(request: Request) {
//     const userId = await validateAccessToken(request);

//     const allProducts = await prisma.product.findMany();
    
//     return new Response(JSON.stringify(allProducts));
//  }



interface FilterProps {
    category?: {
        in: string[];
    };
    brand?: {
        in: string[];
    };
    price?: {
        gte: number;
        lte: number;
    };
}
export async function GET(request: Request) {
    try {
      const url = new URL(request.url);
      const queryParams = url.searchParams;
      const categories = queryParams.get("categories");
      const brands = queryParams.get("brands");
      const minPrice = queryParams.get("minPrice") || "0"; // Provide a default value of "0" if minPrice is null
      const maxPrice = queryParams.get("maxPrice") || "Infinity"; // Provide a default value of "Infinity" if maxPrice is null
  
      // Validate the access token
  
      // Build the filter conditions based on query parameters
      const filter : FilterProps = {};
  
      if (categories) {
        filter.category = {
          in: categories.split(","),
        };
      }
  
      if (brands) {
        filter.brand = {
          in: brands.split(","),
        };
      }
  
      if (minPrice !== "0" || maxPrice !== "Infinity") {
        filter.price = {
          gte: parseFloat(minPrice) || 0,
          lte: parseFloat(maxPrice) || 5678,
        };
      }
  
      // Fetch filtered products using Prisma
      const filteredProducts = await prisma.product.findMany({
        where: filter,
      });
  
      return new Response(JSON.stringify(filteredProducts));
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
  }
  