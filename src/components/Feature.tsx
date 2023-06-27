import { TruckIcon } from 'lucide-react';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className='border border-primary-700 rounded-sm px-3 py-4 flex justify-center items-center gap-5'>
      <div className='p-3 text-white bg-primary-700 rounded-full flex justify-center items-center'>
        {icon}
      </div>
      <div>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-xs text-secondary-500'>{description}</p>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className='container py-10'>
      <div className='w-10/12 sm:grid xl:grid-cols-3 sm:grid-cols-2 flex flex-col gap-6 mx-auto justify-center'>
        <FeatureCard
          title='Free Shipping'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.'
          icon={<TruckIcon size={28} strokeWidth={1.5} />}
        />
        {/* add more features */}
        <FeatureCard
            title='On Time Delivery'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.'
            icon={<TruckIcon size={28} strokeWidth={1.5} />}
            />
         <FeatureCard
            title='On Time Delivery'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.'
            icon={<TruckIcon size={28} strokeWidth={1.5} />}
            />
      </div>
    </div>
  );
};

export default Feature;
