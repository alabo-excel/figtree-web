import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const login = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('login', { email, password })
      // console.log(data)
      setCookie('token', data.token);
      setCookie('user', data.id)
      getUser(data.id)
      if (data.role === 'admin') {
        window.location.href = "/admin/dashboard"
        // router.push('/admin/dashboard')
      } else {
        window.location.href = "/shop"
        // router.push('/shop')
      }
      setLoading(false)
    } catch (err: any) {
      console.log(err)
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  const getUser = async (id: string) => {
    const { data } = await axios.get(`user/${id}`)
    dispatch(setUser({ ...data, id: id }));
    // console.log(data)
  }

  return (
    <MainLayout>
      <div className='lg:w-[30%] w-[90%] mx-auto my-10'>
        {contextHolder}
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