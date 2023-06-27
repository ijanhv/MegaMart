import Image from "next/image";
import React from "react";
import Header from "./Header";

const ShopByCategory = () => {
  return (
    <section className="text-gray-600 container">
         <Header text='Shop by Category' />
      <div className=" mx-auto flex flex-wrap ">
     
        
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
         
                <Image
                  src="https://cdn.shopify.com/s/files/1/0516/3761/6830/products/A3040031_Noise_Cancelling_Headphones_TD01.jpg?v=1668154743"
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full object-cover h-full object-center block"
                />
             
            </div>
            <div className="md:p-2 p-1 w-1/2">

                <Image
                  src="https://oldnavy.gap.com/webcontent/0020/479/185/cn20479185.jpg"
                  alt="gallery"
                  width={500}
                  height={700}
                  className="w-full object-cover h-full object-center block"
                />
              
        
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://housing.com/news/wp-content/uploads/2022/11/stylish-modern-sofa-design-compressed.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://www.kent.co.in/images/kitchen-appliances/Kitchen-Appliances-Category-Page-Banner.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="w-full object-cover h-full object-center block"
                src="https://fayth.com/img/submobile_july2020.jpg"
                
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="w-full object-cover h-full object-center block"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
