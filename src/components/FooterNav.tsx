import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <div className='bg-black lg:flex text-white p-8 justify-between sm:text-sm'>
      <div>
        <h2 className='lg:text-3xl text-xl my-4'>FigTree</h2>
        <Link href={'/about'}>
          <p className='my-4'>About Us</p>
        </Link>
        <Link href={'/careers'}>
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
        <h2 className='lg:text-3xl text-xl my-4'>Customer care</h2>
        <Link href={'/shipping-info'}>
          <p className='my-4'>Shipping info</p>
        </Link>
        <Link href={'/track'}>
          <p className='my-4'>Track your order</p>
        </Link>
        <Link href={'/contact'}>
          <p className='my-4'>Contact us</p>
        </Link>
        <Link href={'/faq'}>
          <p className='my-4'>Help & FAQs</p>
        </Link>
      </div>
      <div>
        <h2 className='lg:text-3xl text-xl my-4'>Quick Links</h2>
        <Link href={'/blog'}>
          <p className='my-4'>Blog</p>
        </Link>
        <Link href={'/distributors'}>
          <p className='my-4'>Where to buy</p>
        </Link>
        {/* <Link href={'/'}>
          <p className='my-4'>Sitemaps</p>
        </Link> */}
      </div>
      <div>
        <h2 className='lg:text-3xl text-xl my-4'>Connect With Us</h2>
        <div className='w-28 my-4 flex justify-between'>
          <Link href={'https://t.me/figtreeco'}><img className='w-6 h-6' src="/assets/icons/telegram_img.jpg" alt="" /></Link>
          <Link href={'https://instagram.com/figtree_company?igshid=MW8wYnpveWh4YWtmaw=='}><img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" /></Link>
          <Link href={'https://x.com/figtree_company?s=09'}><img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" /></Link>
        </div>
        <div className='my-4'>
          <p className='text-orange'>Walk in Store</p>
          <p className='text-sm'>Lekki-20A Emma Abimbola Cole Street, Lekki phase 1, Lagos.</p>
          <p className='text-sm'>Victoria Island - Fourteen36 mall, Sanisi Fafunwa, Lagos.</p>
          <p className='text-sm'>Lekki- The palms Mall, opposite Mobos, Lagos.</p>
          
        </div>
        <div className='my-4'>
          <p className='text-orange'>Get in touch</p>
          <p className='text-sm'>+2349086120741</p>
          <p className='text-sm'>+2349088400800</p>
          <p className='text-sm'>+2349088400807</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;