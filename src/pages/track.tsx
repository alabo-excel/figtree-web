import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const Track = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Tracking" />
        <div className='p-8'>
          <h2 className='text-3xl text-center my-6 font-semibold'>Track your order</h2>
          <p className='text-lg text-center w-[80%] mx-auto'>To track your order, please enter your ORDER ID in the box below and press the track button. This was given to you on your receipt and in the confirmation email you should have received.  </p>

          <div className='text-center my-10 w-[30%] mx-auto'>
            <div className='my-6'>
              <input type="text" placeholder='Enter Order ID' className='p-3 border w-full' />
            </div>
            <button className='p-3 bg-warning w-full'>Track</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Track;