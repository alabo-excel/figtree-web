import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const Contact = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Contact Us" />
        <div className='lg:p-8 p-4'>
          <div className='lg:flex justify-between'>
            <div className='lg:w-[32%] sm:mb-2 bg-[#F5F5F5] p-4 text-center'>
              <img src="/assets/icons/ei_location.png" className='mx-auto' alt="" />
              <p className='text-2xl my-4'>Our Location</p>
              <p className='text-orange text-lg'>20A Emma Abimbola Cole <br /> Street, Lekki phase 1.</p>
            </div>
            <div className='lg:w-[32%] sm:mb-2 bg-[#F5F5F5] p-4 text-center'>
              <img src="/assets/icons/uit_clock-two.png" className='mx-auto' alt="" />
              <p className='text-2xl my-4'>Opening Hours</p>
              <p className=' text-lg'> <span className='text-orange'>Monday to Friday:</span> 8:00-6:00pm</p>
              <p className=' text-lg'> <span className='text-orange'>Saturday:</span> 10:00am</p>
            </div>
            <div className='lg:w-[32%] bg-[#F5F5F5] p-4 text-center'>
              <img src="/assets/icons/contact.png" className='mx-auto' alt="" />
              <p className='text-2xl my-4'>Customer Care</p>
              <p className='text-orange text-lg'>figtreecompany@gmail.com</p>
              <p className='text-orange text-lg'>09086120741, 09088400800</p>
            </div>
          </div>
          <div className='my-10 text-lg'>
            <h1 className='text-4xl my-3'>Get In Touch</h1>
            <div className='flex my-6 justify-between'>
              <div className='w-[49%]'>
                <input type="text" className='p-3 border  w-full' placeholder='Name' name="" id="" />
              </div>
              <div className='w-[49%]'>
                <input type="text" className='p-3 border w-full' placeholder='Email' name="" id="" />
              </div>
            </div>
            <div className='my-6'>
              <input type="number" className='p-3 border w-full' placeholder='Phone Number' name="" id="" />
            </div>
            <div className='my-6'>
              <textarea className='w-full border h-32 p-3' placeholder='Comment'></textarea>
            </div>
            <div className='w-[49%] my-6'>
              <button className='p-3 w-full bg-warning rounded-md'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;