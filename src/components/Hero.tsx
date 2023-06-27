import Image from "next/image";
import React from "react";
import sofa4 from "../assets/sofa4.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    // <div className="w-full bg-cover bg-no-repeat relative">
    //     <Image src={sofa4} alt="sofa" className="absolute" />
    //     <div className="container items-center mix-blend-darken p-10">
    //         <h1 className="text-center">
    //             <span className="sm:text-4xl text-lg font-poppins text-secondary-800">Welcome to </span>
    //             <span className="sm:text-6xl text-lg font-poppins text-secondary-800 ">MEGAMART</span>
    //         </h1>
    //         <Link href="/" className="bg-primary-600 items-center font-poppins text-sm text-white px-2 py-3  hover:bg-primary-500 transition">
    //             Shop Now
    //         </Link>
    //     </div>
    // </div>

    //https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=2000&t=st=1687841840~exp=1687842440~hmac=414009177bd92caad3949a848060fb36ceac047ebf9e93e3f6e5d691f108bbd3

    <main
      className="w-full sm:h-[600px] h-[400px] bg-bottom bg-cover  flex justify-center items-center"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=2000&t=st=1687841840~exp=1687842440~hmac=414009177bd92caad3949a848060fb36ceac047ebf9e93e3f6e5d691f108bbd3
        )`,
      }}
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-5xl text-white font-bold drop-shadow-lg">
          WELCOME TO 
          <span className="text-secondary-700"> MEGAMART</span>
        </h1>
        <p className="mt-5 font-poppins text-center text-lg text-white opacity-70">
          This webiste is about programming and things like that
        </p>
        <a
          className="mt-8 px-12 py-3 bg-primary-600 font-poppins text-xl text-white font-semibold drop-shadow-lg "
          href="#"
        >
          Shop Now
        </a>
      </div>
    </main>
  );
};

export default Hero;
