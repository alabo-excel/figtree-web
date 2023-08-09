import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import router from 'next/router';

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [fName, setfName] = useState<String>('')
  const [lName, setlName] = useState<String>('')


  const register = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('register', { fName, lName, email, password })
      console.log(data)
      setLoading(false)
      router.push('/auth/login')
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <div className='lg:w-[30%] w-[90%] mx-auto my-10'>
        <div className='text-center'>
          <h1 className='text-3xl'>Create Account</h1>
          <p className='my-2 text-sm'>Kindly enter your details to create an account</p>
        </div>
        <input type="text" onChange={e => setfName(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='First Name' />
        <input type="text" onChange={e => setlName(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='Last Name' />
        <input type="text" onChange={e => setEmail(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='Email' />
        <input type="password" onChange={e => setPassword(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='Password' />
        <p className='underline '>Forgot your password?</p>
        <button onClick={() => register()} className='bg-warning rounded-sm p-3  w-full my-4'>{loading ? 'loading...' : 'Sign Up'}</button>
        <Link href={'/auth/login'}>
          <p className='underline text-center '>Log In</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Signup;