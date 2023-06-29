
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import ShopByCategory from "@/components/ShopByCategory";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Home() {


  return <>
    <div className="bg-secondary-50 min-h-full">
    <Hero /> 
    <Feature />
    <ShopByCategory />
    <NewArrivals />

    </div>
  </>
}