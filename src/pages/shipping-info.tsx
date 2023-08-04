import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const ShippingInfo = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Shipping Info" />
        <div className='lg:p-10 p-4'>
          <h2 className='text-xl text-warning'>DELIVERY INFORMATION</h2>
          <ol className='ml-8'>
            <li className='my-3'>We ship nationwide and worldwide.</li>
            <li className='my-3'>Please do not refuse any delivery. Refused deliveries will incur the cost of the original delivery plus the return cost. Any
              refund made will be minus the total delivery and return costs in the case of refused deliveries.</li>
            <li className='my-3'>For international deliveries, you will need to cover customs cost or taxes should any be incurred in shipping to your
              destination.</li>
          </ol>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShippingInfo;