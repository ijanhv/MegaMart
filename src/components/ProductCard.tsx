import { Heart, Search, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
    return (
      <div className="shadow-md rounded overflow-hidden">
        <div className="relative">
          <Image
            src="https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-blue__0865034_pe781333_s5.jpg?f=xl"
            alt="product"
            className="w-full"
            width={600}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
            <Link
              href="/"
              className="text-white text-lg w-9 h-8 bg-primary-500 flex items-center rounded-full justify-center hover:bg-transparent transition"
            >
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <Link
              href="/"
              className="text-white text-lg w-9 h-8 bg-primary-500 flex items-center rounded-full justify-center hover:bg-transparent  transition"
            >
              <Heart size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
  
        {/* content */}
  
        <div className="pt-4 pb-1 px-4 my-2">
          <h4 className="font-poppins text-sm mb-2 text-semibold  text-secondary-700 hover:text-primary-600">
            Chair
          </h4>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl font-semibold text-primary-600">$45</p>
            <p className="text-sm text-secondary-500 line-through">$55</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <div className="text-sx text-secondary-500 ml-3">(150)</div>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-3 text-center border border-3 uppercase border-white py-3 text-sm bg-primary-600 text-white font-semibold rounded-b hover:bg-transparent hover:border-primary-600  hover:text-primary-600">
          <ShoppingBag /> <span>Add to Cart </span>
        </button>
      </div>
    );
  };

export default ProductCard;