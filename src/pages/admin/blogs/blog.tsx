import AdminLayout from '@/layout/AdminLayout';
import { BlogTypes } from '@/types/Applicant.types';
import axios from 'axios';
import { MdPreview } from 'md-editor-rt';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blog, setBlog] = useState<BlogTypes | null>(null)
  const { query } = useRouter()
  const [id] = useState('preview-only');

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`/blog/${query.page}`)
      console.log(data[0])
      setBlog(data[0])
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AdminLayout>
      <div>
        <Link href={'/admin/blogs'}>
          <div className='flex mb-4'>
            <img src="/assets/icons/Back.png" className='h-6' alt="" /> <p className='text-xl fontbold my-auto ml-4'>Back</p>
          </div>
        </Link>
        <div>
          <p className='text-[#00000080] my-2'>{blog?.date.substring(0, 10)}</p>
          <p className='text-3xl my-3'>{blog?.title}</p>
          <img src={blog?.image} className='w-full h-72 object-cover my-3' alt="" />
          <div>
            {blog !== null && <MdPreview editorId={id} modelValue={blog.body} />}
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default Blog;