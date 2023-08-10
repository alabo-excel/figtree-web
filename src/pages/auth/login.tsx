import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import router from 'next/router';

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const login = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('login', { email, password })
      console.log(data)
      setCookie('token', data.token);
      router.push('/shop')
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <div className='lg:w-[30%] w-[90%] mx-auto my-10'>
        <div className='text-center'>
          <h1 className='text-3xl'>Log In</h1>
          <p className='my-2 text-sm'>Kindly enter your log in details</p>
        </div>
        <input type="text" onChange={e => setEmail(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='Email' />
        <input type="password" onChange={e => setPassword(e.target.value)} className='p-3 border border-black w-full my-4' placeholder='Password' />
        <p className='underline '>Forgot your password?</p>
        <button onClick={() => login()} className='bg-warning rounded-sm p-3  w-full my-4'>{loading ? 'loading...' : 'Sign In'}</button>
        <Link href={'/auth/signup'}>
          <p className='underline text-center '>Create Account</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Login;