import React, { useState } from 'react';

const ProductCard = ({ item }: { item: any }) => {
  const [num, setNum] = useState(0);
  return (
    <div className='lg:w-[24%] lg:my-0 my-4'>
      <img onMouseEnter={() => setNum(1)} onMouseLeave={() => setNum(0)} className='w-full' src={'/assets/' + item.img[num]} alt="" />
      <div className='flex justify-between py-3 border-b border-black'>
        <p>{item.title}</p>
        <img src="/assets/icons/favourite.png" alt="" />
      </div>
      <p className='my-2'>{item.price}</p>
      <button className='p-3 rounded-sm w-full bg-warning'>Shop Now</button>
    </div>
  );
};

export default ProductCard;