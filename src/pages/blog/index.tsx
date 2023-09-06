import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import { BlogTypes } from '@/types/Applicant.types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserBlog from '@/components/cards/Blog';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogTypes[]>([])

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    try {
      const { data } = await axios.get('/blogs')
      console.log(data)
      setBlogs(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Blog" />

        <div className='lg:p-8 p-4'>
          {blogs.map((blog, index) => <UserBlog key={index} blog={blog} />)}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;