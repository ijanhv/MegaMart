import Breadcrums from '@/components/Breadcrums'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const Wishlist = () => {
  return (
    <div className="bg-secondary-50 pb-10">
    <div className="container py-4 items-center gap-3 ">
      <Breadcrums currentPath="My Wishlist" />

    </div>
    <div className="container py-4 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-7">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
    </div>
  )
}

export default Wishlist