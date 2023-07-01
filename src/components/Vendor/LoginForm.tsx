import newRequest from "@/utils/newRequest";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

interface VendorLoginProps {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}

interface FormInput {
  email: string;
  password: string;
}

const VendorLogin = ({ setAuth }: VendorLoginProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (vendor) => {
    try {
        const res = await newRequest.post("/vendor/login", vendor);
        console.log(res.data.accessToken);
        
        localStorage.setItem("currentVendor", JSON.stringify(res.data.accessToken));

        toast.success("Login Successfull!");
        await new Promise<void>((resolve) => setTimeout(resolve, 2000));
        router.push("/vendor");
    } catch (error: any) {
        console.log(error?.response?.data.message);
        toast.error(error?.response?.data.message);
    }
};



  return (
    <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden">
      <h2 className="text-2xl text-secondary-600 font-poppins font-semibold uppercase">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm text-secondary-600 font-poppins"
            >
              Email Address <span className="text-primary-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm text-secondary-600 font-poppins"
            >
              Password <span className="text-primary-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="h-4 w-4 text-primary-600 bg-slate-200 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-secondary-600 font-poppins"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link
              href="#"
              className="font-medium font-poppins text-primary-600 hover:text-primary-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary-600 w-full uppercase tracking-wide font-poppins text-sm text-white px-2 py-3 border-primary-600 border-3 shadow-md rounded-md hover:bg-secondary-50 hover:text-primary-600 hover:border-primary-600 transition">
            Login
          </button>
        </div>
        <p className="text-secondary-500 mt-6 text-md text-center">
          Don`&apost have an Accont?
          <span
            onClick={() => setAuth("register")}
            className="text-primary-600 font-medium ml-1  cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>

   
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
       
      />
    </div>
  );
};

export default VendorLogin;
