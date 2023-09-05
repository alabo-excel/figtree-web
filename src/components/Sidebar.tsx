import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const component = [

  ]
  return (
    <div className='fixed h-screen top-0 bg-black w-[20%]'>
      <img src="/assets/logo-black.png" className='h-32 w-full object-cover ' alt="" />
      <Link href={'/admin/dashboard'}>
        <div className='my-3 p-4 flex text-white bg-[#FFFFFF33] border-l-2 border-white mx-auto'>
          <img src="/assets/icons/bxs_dashboard.png" alt="" /> <p className='my-auto text-sm ml-6'>Dashboard </p>
        </div>
      </Link>
      <Link href={'/admin/products'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/product.png" alt="" /> <p className='my-auto text-sm ml-6'>Products </p>
        </div>
      </Link>
      <Link href={'/admin/customers'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/costumer.png" alt="" /> <p className='my-auto text-sm ml-6'>Customers </p>
        </div>
      </Link>
      <Link href={'/admin/dashboard'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/carbon_report.png" alt="" /> <p className='my-auto text-sm ml-6'>Orders </p>
        </div>
      </Link>
      <Link href={'/admin/reviews'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/positive-review.png" alt="" /> <p className='my-auto text-sm ml-6'>Reviews </p>
        </div>
      </Link>
      <Link href={'/admin/dashboard'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/career.png" alt="" /> <p className='my-auto text-sm ml-6'>Careers </p>
        </div>
      </Link>
      <Link href={'/admin/dashboard'}>
        <div className='my-3 p-4 flex text-white mx-auto'>
          <img src="/assets/icons/blog.png" alt="" /> <p className='my-auto text-sm ml-6'>Blogs </p>
        </div>
      </Link>
      <div className='my-3 mt-auto p-4 flex text-white mx-auto'>
        <img src="/assets/icons/logout.png" alt="" /> <p className='my-auto text-sm ml-6'>Logout </p>
      </div>
    </div>
  );
};

export default Sidebar;