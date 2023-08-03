import React from 'react';
import { Carousel } from 'antd';

const Slider = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className='mt-10'>
      <Carousel afterChange={onChange}>
        <div className='bg-[#66170F]'>
          <div className='flex justify-evenly'>
            <div className='my-auto text-white'>
              <h1 className='text-7xl'>Live Healthy, Naturally</h1>
              <p className='my-4 text-base'>Here for all your beauty needs, whatever it might be</p>
              <div className='cursor-pointer font-bold text-base flex'>
                Shop Now
                <img src="/assets/icons/arrowright.png" className='w-4 h-4 my-auto ml-2' alt="" />
              </div>
            </div>
            <div><img src="/assets/user.png" alt="" /></div>
          </div>
        </div>
        {/* <div>
          <h3>2</h3>
        </div> */}
      </Carousel>
    </div>
  );
};

export default Slider;