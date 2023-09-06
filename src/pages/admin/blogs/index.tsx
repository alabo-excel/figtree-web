import AdminLayout from '@/layout/AdminLayout';
import Link from 'next/link';
import React from 'react';

const BlogAdmin = () => {
  return (
    <AdminLayout>
      <div>
        <p className='font-bold text-2xl'>Blogs</p>
        <div className='my-4 border rounded-t-xl'>
          <div className='flex justify-between p-4'>
            <div className=''>
              <p className='text-xl'>All Blogs</p>
              <p className='my-2'>You're viewing all the blogs below</p>
            </div>
            <Link href={'/admin/blogs/new-blog'}>
              <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>+ Add Blog Post</button>
            </Link>
          </div>
        </div>
        <div className='my-4'>
          <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Blog' />
        </div>
      </div>
    </AdminLayout>

  );
};

export default BlogAdmin;