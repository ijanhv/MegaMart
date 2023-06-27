import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import SecondaryAppBar from "@/components/SecondaryAppBar";
import ShopByCategory from "@/components/ShopByCategory";

export default function Home() {
  return <>
    <div className="bg-secondary-50 min-h-full">
    <SecondaryAppBar />

    <Hero /> 
    <Feature />
    <ShopByCategory />
    <NewArrivals />

    </div>
  </>
}