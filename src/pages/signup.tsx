import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React from 'react';

const Signup = () => {
  return (
    <MainLayout>
      <div className='w-[30%] mx-auto my-10'>
        <div className='text-center'>
          <h1 className='text-3xl'>Create Account</h1>
          <p className='my-2 text-sm'>Kindly enter your details to create an account</p>
        </div>
        <input type="text" className='p-3 border border-black w-full my-4' placeholder='First Name' />
        <input type="text" className='p-3 border border-black w-full my-4' placeholder='Last Name' />
        <input type="text" className='p-3 border border-black w-full my-4' placeholder='Email' />
        <input type="password" className='p-3 border border-black w-full my-4' placeholder='Password' />
        <p className='underline '>Forgot your password?</p>
        <button className='bg-warning rounded-sm p-3  w-full my-4'>Sign Up</button>
        <Link href={'/login'}>
          <p className='underline text-center '>Log In</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Signup;