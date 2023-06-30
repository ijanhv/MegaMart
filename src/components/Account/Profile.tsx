import React from 'react'
import Button from '../Button'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Profile = () => {
  const { data: session } = useSession();

  // get user details

  const



  return (
    <>
    <h4 className="text-lg text-secondary-600 font-medium capitalize mb-4">
      Profile Details
    </h4>
    {!session?.user ? 
    <div>
      <p className='mb-5'>Please login to view your profile</p>
      <Link
        href="/auth/signin" 
      className="bg-primary-600 text-white rounded-md px-3 py-2 mt-5 focus:outline-none focus:border-primary-600"
      >
        Login
      </Link>
    </div> 
    :
      <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="text-sm text-secondary-600 font-poppins"
          >
            Full Name <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
            placeholder="Enter your name"

          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-sm text-secondary-600 font-poppins"
          >
            Email Address <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-sm text-secondary-600 font-poppins"
          >
            Birthday <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            name="birthday"
            id="birthday"
            className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-sm text-secondary-600 font-poppins"
          >
            Phone Number <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-1/2">
        <Button  
      
        text="Save Changes" />
        </div>
       
      </div>
    </div>}
  </>
  )
}

export default Profile