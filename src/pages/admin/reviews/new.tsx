import AdminLayout from '@/layout/AdminLayout';
import React, { useState, useRef } from 'react';

const New = () => {
  const beoferRef = useRef<HTMLInputElement>(null)
  const afterRef = useRef<HTMLInputElement>(null)

  const [before, setBefore] = useState("")
  const [after, setAfter] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleBefore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setBefore(
            reader.result as string,
          )
        }
      }
    }
  }
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

  return (
    <AdminLayout>
      <div>
        <p className='text-2xl font-bold'>Ratings & Review</p>
        <div className='border p-6 mt-4 rounded-xl'>
          <div>
            <p className='tet-xl'>Review Images</p>
            <div className='flex mt-4'>
              <div>
                <p className='text-sm p-2 text-center'>Before </p>
                <input type="file" ref={beoferRef} className="hidden" onChange={handleBefore} />

                {before === "" ? <div onClick={() => beoferRef.current?.click()} className='border w-72 cursor-pointer h-52 pt-10 rounded-md text-center'>
                  <img src="/assets/icons/upload.png" className='w-20 mx-auto' alt="" />
                  <p className='text-xs my-1'>Click to upload</p>
                  <p className='text-sm'>SVG, PNG, JPG</p>
                </div> : <img onClick={() => beoferRef.current?.click()} className='w-72 h-52 rounded-md' src={before} alt="" />}
              </div>

              <div className='ml-10'>
                <p className='text-sm p-2 text-center'>After </p>
                <input type="file" ref={afterRef} className="hidden" onChange={handleAfter} />

                {after === "" ? <div onClick={() => afterRef.current?.click()} className='border w-72 cursor-pointer h-52 pt-10 rounded-md text-center'>
                  <img src="/assets/icons/upload.png" className='w-20 mx-auto' alt="" />
                  <p className='text-xs my-1'>Click to upload</p>
                  <p className='text-sm'>SVG, PNG, JPG</p>
                </div> : <img onClick={() => afterRef.current?.click()} className='w-72 h-52 rounded-md' src={after} alt="" />}
              </div>
            </div>
          </div>
          <div className='my-4'>
            <label htmlFor="" className='my-1'>Review Title</label>
            <input type="text" placeholder='Enter Title' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
          </div>
          <div className='my-4'>
            <label htmlFor="" className='my-1'>Review Description</label>
            <textarea placeholder='Enter Description' className='p-3 rounded-md bg-[#EFEFF7] w-full h-40' ></textarea>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default New;