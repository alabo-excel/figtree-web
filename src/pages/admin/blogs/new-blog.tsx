import AdminLayout from '@/layout/AdminLayout';
import React, { useState, useRef, useEffect } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import axios from 'axios';
import { message } from 'antd';


const NewBlog = () => {
  const [discription, setDiscription] = useState("**Hello world!!!**")
  const [title, setTitle] = useState("")
  const afterRef = useRef<HTMLInputElement>(null)
  const [after, setAfter] = useState("")
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const [brief, setBrief] = useState("")

  const handleAfter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setAfter(
            reader.result as string,
          )
        }
      }
    }
  }

  const addBlog = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/blog', {
        title,
        brief,
        body: discription,
        image: after
      })
      messageApi.open({
        type: 'success',
        content: 'Blog created successfully!',
      });
      console.log(data)
      setLoading(false)
      router.push(`/admin/blogs`)
    } catch (err: any) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  const editBlog = async () => {

  }

  return (
    <AdminLayout>
      <div>
        {contextHolder}
        {query.page !== undefined ? <p className='font-bold text-2xl'>Edit blog post</p> : <p className='font-bold text-2xl'>Add a blog post</p>
        }
        <div className='border p-6 rounded-xl'>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" className='p-4 text-3xl w-full ' placeholder='Add Title' />

          <textarea name="" value={brief} onChange={e => setBrief(e.target.value)} className='w-full p-4 h-32 bg-[#EFEFF7]' placeholder='Enter Summary'></textarea>
          <MdEditor modelValue={discription} onChange={setDiscription} language='en-US' toolbars={['bold', 'underline', 'italic', 'strikeThrough', 'title', 'sub', 'sup', 'quote', 'unorderedList', 'orderedList', 'link',]} />
          <div className=''>
            <input type="file" ref={afterRef} className="hidden" onChange={handleAfter} />

            {after === "" ? <div onClick={() => afterRef.current?.click()} className='border w-72 cursor-pointer h-52 pt-10 rounded-md text-center'>
              <img src="/assets/icons/upload.png" className='w-20 mx-auto' alt="" />
              <p className='text-xs my-1'>Click to upload</p>
              <p className='text-sm'>SVG, PNG, JPG</p>
            </div> : <img onClick={() => afterRef.current?.click()} className='w-72 h-52 rounded-md' src={after} alt="" />}
          </div>
          <div className='my-6'>
            <Link href={'/admin/blogs'}><button className='p-3 font-bold px-6 rounded-md'>Cancel</button></Link>
            {query.page !== undefined ? <button onClick={() => editBlog()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Edit'}</button> : <button onClick={() => addBlog()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Publish'}</button>
            }
          </div>
        </div>

      </div>
    </AdminLayout>

  );
};

export default NewBlog;