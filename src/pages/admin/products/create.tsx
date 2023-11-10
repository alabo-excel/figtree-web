import AdminLayout from '@/layout/AdminLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import router, { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import { message } from 'antd';
import Link from 'next/link';

const Create = () => {
  const [previewImages, setFilePreview] = useState<string[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [weight, setWeight] = useState("")
  const { query } = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.page !== undefined) {
      getProduct()
    }
  }, [query.page])

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`product/${query.page}`)
      console.log(data[0])
      // setProduct(data[0])
      setName(data[0].title)
      setPrice(data[0].price)
      setCategory(data[0].category)
      setDescription(data[0].description)
      setQuantity(data[0].quantity)
      setWeight(data[0].weight)
      setFilePreview(data[0].image)
    } catch (err) {
      console.log(err)
    }
  }

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
    // console.log(previewImages)
  }

  const handleDelSelected = (index: number) => {
    setFilePreview((prev) => {
      const newPreviewImages = [...prev];
      newPreviewImages.splice(index, 1);
      return newPreviewImages;
    });
  };

  const addProduct = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/product', {
        title: name,
        description,
        price,
        category,
        quantity,
        weight,
        image: previewImages
      })
      messageApi.open({
        type: 'success',
        content: 'Product created successfully!',
      });
      console.log(data)
      setLoading(false)
      router.push(`/admin/products`)
    } catch (err: any) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  const editProduct = async () => {
    try {
      setLoading(true)
      const { data } = await axios.put(`/product/edit/${query.page}`, {
        title: name,
        description,
        price,
        category,
        quantity,
        weight,
        image: previewImages
      })
      console.log(data)
      setLoading(false)
      messageApi.open({
        type: 'success',
        content: 'Product edited successfully!',
      });
      router.push(`/admin/products/single?page=${query.page}`)
    } catch (err: any) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  return (
    <AdminLayout>
      <div>
        {contextHolder}
        <div className='flex justify-between'>
          {query.page !== undefined ? <p className='text-xl font-bold'>Edit Product</p> : <p className='text-xl font-bold'>Add New Product</p>
          }
          {/* <div>
            <button className='p-3 font-bold px-6 rounded-md'>Cancel</button>
            <button className='p-3 font-bold bg-warning rounded-md px-6'>Publish</button>
          </div> */}
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Product Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Product Name' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Product Description</label>
          <textarea onChange={e => setDescription(e.target.value)} value={description} className='p-3 rounded-md w-full h-32 bg-[#EFEFF7] ' placeholder='Enter Product Description'></textarea>
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Price</label>
          <input type="number" onChange={e => setPrice(e.target.value)} value={price} placeholder='Enter Price' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Main Category</label>
          <select name="" id="" value={category} onChange={e => setCategory(e.target.value)} className='p-3 rounded-md bg-[#EFEFF7] w-full' >
            <option value="Category" className='hidden'>Category</option>
            <option value="lipcare">Lipcare</option>
            <option value="scrubs">Scrubs</option>
            <option value="creams">Creams</option>
            <option value="customized-oils">Customized Oils</option>
            <option value="moisturizers">Moisturizers</option>
            <option value="serums">Serums</option>
            <option value="face-cleaners">Face Cleaners</option>
            <option value="pure-butters">Pure Butters</option>
            <option value="soaps">Soaps</option>
            <option value="face-wash">Face Wash</option>
            <option value="pure-carrier-oils">Pure Carrier Oils</option>
            <option value="pure-oils">Pure Oils</option>
            <option value="sponges">Sponges</option>
            <option value="haircare">Haircare</option>
            <option value="pure-essential-oils">Pure Essential Oils</option>
            <option value="toners">Toners</option>

          </select>
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Stock Quantity</label>
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder='Enter Stock Quality' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
        </div>
        <div className='my-3'>
          <label htmlFor="" className='my-2'>Weight (in KG)*</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder='Enter Weight' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
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
          <Link href={'/admin/products'}><button className='p-3 font-bold px-6 rounded-md'>Cancel</button></Link>
          {query.page !== undefined ? <button onClick={() => editProduct()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Edit'}</button> : <button onClick={() => addProduct()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Publish'}</button>
          }
        </div>
      </div>
    </AdminLayout>

  );
};

export default Create;