import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import ShopByCategory from "@/components/ShopByCategory";
import Link from "next/link";

export default function Home() {
  return <>
    <div className="bg-secondary-50 min-h-full">
      Home Page
    <Link href="/user">user</Link>
    {/* <Hero /> 
    <Feature />
    <ShopByCategory />
    <NewArrivals /> */}

    </div>
  </>
}