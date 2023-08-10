import Link from 'next/link';
import React, { useState } from 'react';

const ShopCard = ({ item }: { item: any }) => {

  return (
    <div className=''>
      <Link href={`/shop/single?page=${item._id}`}><img className='w-full' src={item.image[0]} alt="" /></Link>
      <div className='flex justify-between py-2 '>
        <div className=''>
          <p>{item.title}</p>
          <p className=''>{item.price}</p>
        </div>
        <div className='flex'>
          <img src="/assets/icons/favourite.png" className='w-6 h-6 mx-2' alt="" />
          <img src="/assets/icons/cart.png" className='w-6 h-6 mx-2' alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;