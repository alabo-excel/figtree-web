import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <div>
      <div className='bg-black p-3'>
        <div className='ml-auto w-28 flex justify-between'>
          <img className='w-6 h-6' src="/assets/icons/lucide_facebook.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" />
        </div>
      </div>
      <div className='w-[25%] mx-auto'>
        <img src="/assets/logo-bg.png" alt="" />
      </div>
      <div className='flex justify-between'>
        <div></div>
        <div className='flex w-[40%] justify-between'>
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Link href={"/"}>
            <div>Shop</div>
          </Link>
          <Link href={"/"}>
            <div>Where to buy</div>
          </Link>
          <Link href={"/"}>
            <div>About us</div>
          </Link>
          <Link href={"/"}>
            <div>Resources</div>
          </Link>
          
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderNav;