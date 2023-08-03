import React, { useState } from 'react';

const ShopCard = ({ item }: { item: any }) => {
  const [num, setNum] = useState(0);

  return (
    <div className='w-[30%]'>
      <img onMouseEnter={() => setNum(1)} onMouseLeave={() => setNum(0)} className='w-full' src={'/assets/' + item.img[num]} alt="" />
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