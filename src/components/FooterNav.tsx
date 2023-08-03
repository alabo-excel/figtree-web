import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <div className='bg-black flex text-white p-8 justify-between'>
      <div>
        <h2 className='text-3xl my-4'>FigTree</h2>
        <Link href={'/'}>
          <p className='my-4'>About Us</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Careers</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Privacy policy</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Terms of service</p>
        </Link>
      </div>
      <div>
        <h2 className='text-3xl my-4'>Customer care</h2>
        <Link href={'/'}>
          <p className='my-4'>Shipping info</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Track your order</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Contact us</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Help & FAQs</p>
        </Link>
      </div>
      <div>
        <h2 className='text-3xl my-4'>Quick Links</h2>
        <Link href={'/'}>
          <p className='my-4'>Blog</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Where to buy</p>
        </Link>
        <Link href={'/'}>
          <p className='my-4'>Sitemaps</p>
        </Link>
      </div>
      <div>
        <h2 className='text-3xl my-4'>Connect With Us</h2>
        <div className='w-28 my-4 flex justify-between'>
          <img className='w-6 h-6' src="/assets/icons/lucide_facebook.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" />
        </div>
        <div className='my-4'>
          <p className='text-warning'>Walk in Store</p>
          <p className='text-sm'>20A Emma Abimbola Cole Street, Lagos.</p>
        </div>
        <div className='my-4'>
          <p className='text-warning'>Get in touch</p>
          <p className='text-sm'>+234198071898</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;