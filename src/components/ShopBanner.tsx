import React from 'react';

const ShopBanner = ({ text }: { text: string }) => {
  return (
    <div className='my-10'>
      <div className='relative'>
        <img className='w-full h-[32vh]' src="/assets/banner.png" alt="" />
        <div className="w-full absolute top-0 left-0 right-0 bg-[#000000] opacity-50 h-[32vh]"></div>
        <h1 className='text-4xl absolute top-24 left-0 right-0 text-white z-10 font-bold text-center'>{text}</h1>
      </div>
    </div>
  );
};

export default ShopBanner;