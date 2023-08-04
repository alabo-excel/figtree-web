import ShopBanner from '@/components/ShopBanner';
import CartCard from '@/components/cards/CartCard';
import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React from 'react';

const Cart = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Shopping Cart" />
        <div className='flex p-8'>
          <div className='w-full'>
            <CartCard />
            <div className='border-t border-t-gray my-6'></div>
            <div className='float-right'>
              <p className='font-bold text-xl'>Subtotal (1 item): N4500</p>
              <p className='my-4'>Looking for more? <Link href={'/shop'}> <span className='text-orange'> Continue Shopping</span> </Link></p>
            </div>

            <div className='mt-32'>
              <h1 className='text-4xl font-bold'>Your items</h1>
              <div className='flex text-xl my-5'>
                <p className='cursor-pointer'>Save for later</p>
                <p className='ml-8 cursor-pointer'>Buy it again</p>
              </div>
              <div className='border-t border-t-gray my-6'></div>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='text-center p-10 shadow-lg rounded-md'>
              <p className='font-bold text-xl'>Subtotal (1 item): N4500</p>
              <button className='p-3 rounded-md w-full bg-warning my-4'>Proceed to checkout</button>
            </div>
            <div className='shadow-lg rounded-md p-6 mt-6'>
              <p className='text-center font-bold'>Customers who bought items in your recent history also bought </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;