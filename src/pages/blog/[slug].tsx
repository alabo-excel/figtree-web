import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import { BlogTypes } from '@/types/Applicant.types';
import axios from 'axios';
import { MdPreview } from 'md-editor-rt';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

const SingleBlog = () => {
  const [blog, setBlog] = useState<BlogTypes | null>(null)
  const { query } = useRouter()
  const [id] = useState('preview-only');
  const author = getCookie('user')

  useEffect(() => {
    getBlogs()
    View()
  }, [])

  const View = async () => {
    try {
      const { data } = await axios.put(`/blog/view/${query.slug}`, {
        user: author
      })
      // console.log(data)
      // setBlog(data[0])
    } catch (err) {
      console.log(err)
    }
  }

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`/blog/${query.slug}`)
      // console.log(data[0])
      setBlog(data[0])
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Blog" />
        <div>
          <div className='lg:p-8 p-4'>
            <p className='text-[#00000080] my-2'>{blog?.date.substring(0, 10)}</p>
            <p className='text-3xl my-3'>{blog?.title}</p>
          </div>
          <img src={blog?.image} className='w-full h-72 object-cover my-3' alt="" />
          <div className='lg:p-8 p-4'>
            {blog !== null && <MdPreview editorId={id} modelValue={blog.body} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleBlog;