import Link from 'next/link';
import React, { useState } from 'react';

const ProductCard = ({ item }: { item: any }) => {
  const [num, setNum] = useState(0);
  return (
    <div className='lg:w-[30%] w-[33.33%] sm:w-[100%] my-4'>
      <img onMouseEnter={() => setNum(1)} onMouseLeave={() => setNum(0)} className='w-full h-52 object-cover' src={item.image[num]} alt="" />
      <div className='flex justify-between py-3 border-b border-black'>
        <p>{item.title}</p>
        <img className='w-4 h-4' src="/assets/icons/favourite.png" alt="" />
      </div>
      <h5 className='my-2'>N {item.price}</h5>
      <Link href={'/shop/single?page=' + item._id}><button className='p-3 rounded-sm w-full bg-warning'>Shop Now</button></Link>
    </div>
  );
};

export default ProductCard;