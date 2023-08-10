import Link from 'next/link';
import React, { useState } from 'react';

const ProductCard = ({ item }: { item: any }) => {
  const [num, setNum] = useState(0);
  return (
    <div className='lg:w-[24%] lg:my-0 my-4'>
      <img onMouseEnter={() => setNum(1)} onMouseLeave={() => setNum(0)} className='w-full' src={item.image[num]} alt="" />
      <div className='flex justify-between py-3 border-b border-black'>
        <p>{item.title}</p>
        <img src="/assets/icons/favourite.png" alt="" />
      </div>
      <p className='my-2'>{item.price}</p>
      <Link href={'/shop/single?page=' + item._id}><button className='p-3 rounded-sm w-full bg-warning'>Shop Now</button></Link>
    </div>
  );
};

export default ProductCard;