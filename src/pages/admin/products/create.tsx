import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import React, { useState, useRef } from 'react';

const Create = () => {
  const [previewImages, setFilePreview] = useState<string[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [weight, setWeight] = useState("")

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setFilePreview([...previewImages,
          reader.result as string,
          ])
        }
      }
    }
    console.log(previewImages)
  }

  const handleDelSelected = (index: number) => {
    setFilePreview((prev) => {
      const newPreviewImages = [...prev];
      newPreviewImages.splice(index, 1);
      return newPreviewImages;
    });
  };

  const addProduct = async () => {
    const { data } = await axios.post('/product', {
      name,
      description,
      price,
      category,
      quantity,
      weight,
      image: previewImages
    })
  }

  return (
    <AdminLayout>
      <div>
        <div className='flex justify-between'>
          <p className='text-xl font-bold'>Add New Product</p>
          {/* <div>
            <button className='p-3 font-bold px-6 rounded-md'>Cancel</button>
            <button className='p-3 font-bold bg-warning rounded-md px-6'>Publish</button>
          </div> */}
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Product Name</label>
          <input type="text" placeholder='Enter Product Name' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Product Description</label>
          <textarea className='p-3 rounded-md w-full h-32 bg-[#EFEFF7] ' placeholder='Enter Product Description'></textarea>
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Price</label>
          <input type="text" placeholder='Enter Price' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Main Category</label>
          <select name="" id="" className='p-3 rounded-md bg-[#EFEFF7] w-full' >
            <option value="Category" className='hidden'>Category</option>
          </select>
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Stock Quantity</label>
          <input type="number" placeholder='Enter Stock Quality' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Weight (in KG)*</label>
          <input type="number" placeholder='Enter Weight' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div>
          <p className='text-xl my-3'>Product Image</p>
          <input type="file" ref={uploadRef} multiple={true} className="hidden" onChange={handleImage} />
          <div onClick={() => uploadRef.current?.click()} className='border flex cursor-pointer justify-between p-3 rounded-md w-32'>
            <img src="/assets/icons/upload_file_black.png" alt="" />
            <p>Browse</p>
          </div>
          <div className='flex mt-4'>
            {previewImages.map((image, index) => (
              <div className="w-[100px] h-[100px] m-[3px]" key={index}>
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className=" object-cover w-full h-full"
                />
                <div
                  className="flex  cursor-pointer text-[red] justify-center items-center"
                  onClick={() => handleDelSelected(index)}
                >
                  Delete
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='float-right'>
          <button className='p-3 font-bold px-6 rounded-md'>Cancel</button>
          <button onClick={() => addProduct()} className='p-3 font-bold bg-warning rounded-md px-6'>Publish</button>
        </div>
      </div>
    </AdminLayout>

  );
};

export default Create;