import AdminLayout from '@/layout/AdminLayout';
import Link from 'next/link';
import React from 'react';

const SingleProduct = () => {
  return (
    <AdminLayout>
      <div>
        <Link href={'/'}> <div className='flex'>
          <img src="/assets/icons/Back.png" alt="" /> <p className='text-xl fontbold my-auto ml-4'>Product Details</p>
        </div> </Link>
        <div className='flex justify-between my-6'>
          <p className='text-lg font-bold'>FigTree Pure Butter</p>
          <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>Edit Product</button>
        </div>
        <div className='bg-[#F9FAFC] flex justify-between p-8 rounded-md'>
          <div>
            <p className='text-sm font-bold'>Product Id:</p>
            <p className='text-[#00000080] my-2'>Figtree shea butter</p>
          </div>
          <div>
            <p className='text-sm font-bold'>Category</p>
            <p className='text-[#00000080] my-2'>Body butter</p>
          </div>
          <div>
            <p className='text-sm font-bold'>Jan 01, 2020</p>
            <p className='text-[#00000080] my-2'>Created At</p>
          </div>
          <div>
            <p className='text-sm font-bold'>N6,500 </p>
            <p className='text-[#00000080] my-2'>Price</p>
          </div>
        </div>
        <div className='border mt-4 rounded-xl p-4'>
          <div className='border-b py-3'>
            <p className='text-lg'>You're viewing product information below</p>
          </div>
          <div className='flex'>
            <div className='w-[70%]'>
              <p className='my-4 text-lg'>Product details</p>
              <p className='text-sm'>FIGTREE PURE SHEA BUTTER is hand made from dry Ackee Apple Seeds, pounded and mixed with palm kerned oil. Black soap cleanses gently, so it is ideal for people with scalp conditions like eczema, dandruff, rashes, dry itchy skin, cuts and wounds. It can also be used as shampoo</p>
              <p className='my-4 text-lg'>Product Weight</p>
              <p className='text-sm'>500g</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default SingleProduct;