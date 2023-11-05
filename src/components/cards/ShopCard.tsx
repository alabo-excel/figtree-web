import Link from 'next/link';
import React, { useState } from 'react';

const ShopCard = ({ item }: { item: any }) => {

  return (
    <div className='lg:w-[24%] w-[48%] '>
      <Link href={`/shop/single?page=${item._id}`}><img className='w-full oject-cover' src={item.image[0]} alt="" /></Link>
      <div className='flex justify-between py-2 '>
        <div className=''>
          <p className='lg:text-base text-sm'>{item.title}</p>
          <p className=''>N {item.price}</p>
        </div>
        <div className='flex'>
          <img src="/assets/icons/favourite.png" className='w-4 h-4 lg:mx-2' alt="" />
          <img src="/assets/icons/cart.png" className='w-4 h-4 mx-2' alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;