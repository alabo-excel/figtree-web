import Link from 'next/link';
import React from 'react';
import { deleteCookie } from 'cookies-next';

const Sidebar = () => {
  const route = window.location.pathname

  const logout = () => {
    deleteCookie('token')
    window.location.href = "/auth/login"
  }

  return (
    <div className='fixed h-screen top-0 bg-black w-[20%]'>
      <img src="/assets/logo-black.png" className='h-32 w-full object-cover ' alt="" />
      <Link href={'/admin/dashboard'}>
        <div className={`${route.includes('dashboard') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/bxs_dashboard.png" alt="" /> <p className='my-auto text-sm ml-6'>Dashboard </p>
        </div>
      </Link>
      <Link href={'/admin/products'}>
        <div className={`${route.includes('products') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/product.png" alt="" /> <p className='my-auto text-sm ml-6'>Products </p>
        </div>
      </Link>
      <Link href={'/admin/customers'}>
        <div className={`${route.includes('customers') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/costumer.png" alt="" /> <p className='my-auto text-sm ml-6'>Customers </p>
        </div>
      </Link>
      <Link href={'/admin/orders'}>
        <div className={`${route.includes('orders') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/carbon_report.png" alt="" /> <p className='my-auto text-sm ml-6'>Orders </p>
        </div>
      </Link>
      <Link href={'/admin/reviews'}>
        <div className={`${route.includes('reviews') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/positive-review.png" alt="" /> <p className='my-auto text-sm ml-6'>Reviews </p>
        </div>
      </Link>
      <Link href={'/admin/jobs'}>
        <div className={`${route.includes('jobs') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/career.png" alt="" /> <p className='my-auto text-sm ml-6'>Careers </p>
        </div>
      </Link>
      <Link href={'/admin/blogs'}>
        <div className={`${route.includes('blogs') && 'bg-[#FFFFFF33] border-l-2 border-white'} my-3 p-4 flex text-white mx-auto`}>
          <img src="/assets/icons/blog.png" alt="" /> <p className='my-auto text-sm ml-6'>Blogs </p>
        </div>
      </Link>
      <div onClick={() => logout()} className='my-3 cursor-pointer mt-auto p-4 flex text-white mx-auto'>
        <img src="/assets/icons/logout.png" alt="" /> <p className='my-auto text-sm ml-6'>Logout </p>
      </div>
    </div>
  );
};

export default Sidebar;