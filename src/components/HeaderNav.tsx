import Link from 'next/link';
import React, { useState } from 'react';
import AboutUs from './dropdowns/AboutUs';
import Resources from './dropdowns/Resources';
import Shop from './dropdowns/Shop';

const HeaderNav = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <div className='bg-black p-3'>
        <div className='ml-auto w-28 flex justify-between'>
          <img className='w-6 h-6' src="/assets/icons/lucide_facebook.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" />
        </div>
      </div>
      <div className='lg:w-[25%] w-1/2 mx-auto'>
        <img src="/assets/logo-bg.png" alt="" />
      </div>
      <div className='flex justify-between'>
        <div onClick={() => setMenu(!menu)} className='lg:hidden mx-4 md:hidden sm:block'>
          {menu ? <img src="/assets/icons/close.png" className='w-4 my-1 cursor-pointer' alt="" /> : <img src="/assets/icons/hamburger.png" className='w-8 cursor-pointer' alt="" />
          }
        </div>
        <div></div>
        <div className='flex sm:hidden w-[40%] justify-between'>
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Shop />
          {/* <Link href={"/"}>
            <div>Shop</div>
          </Link> */}
          <Link href={"/distributors"}>
            <div>Where to buy</div>
          </Link>
          <AboutUs />
          <Resources />

          {/* <Link href={"/"}>
            <div>About us</div>
          </Link> */}
          {/* <Link href={"/"}>
            <div>Resources</div>
          </Link> */}


        </div>
        <div className='flex'>
          <Link href={'/auth/login'}>
            <img className='w-5 h-5 mx-2' src="/assets/icons/line-md_account.png" alt="" />
          </Link>
          <Link href={'/shop/cart'}>
            <img className='w-5 h-5 mx-4' src="/assets/icons/cart.png" alt="" />
          </Link>
        </div>
      </div>
      {
        menu && <div className='p-5'>
          <div className='my-4'>
            <Link href={"/"}>
              <div>Home</div>
            </Link>
          </div>
          <div className='my-4'>
            <Shop />
          </div>
          <div className='my-4'>
            <Link href={"/distributors"}>
              <div>Where to buy</div>
            </Link>
          </div>
          <div className='my-4'>
            <AboutUs />
          </div>
          <div className='my-4'>
            <Resources />
          </div>
        </div>
      }
    </div>
  );
};

export default HeaderNav;