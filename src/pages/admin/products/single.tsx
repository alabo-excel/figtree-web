import AdminLayout from '@/layout/AdminLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SingleProduct = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<ProductType>()

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`product/${query.page}`)
      setProduct(data[0])
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <AdminLayout>
      <div>
        <Link href={'/admin/products'}> <div className='flex'>
          <img src="/assets/icons/Back.png" alt="" /> <p className='text-xl fontbold my-auto ml-4'>Product Details</p>
        </div> </Link>
        <div className='flex justify-between my-6'>
          <p className='text-lg font-bold'>{product?.title}</p>
          <Link href={`/admin/products/create?page=${product?._id}`}>
            <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>Edit Product</button>
          </Link>
        </div>
        <div className='bg-[#F9FAFC] flex justify-between p-8 rounded-md'>
          {/* <div>
            <p className='text-sm font-bold'>Product Id:</p>
            <p className='text-[#00000080] my-2'>Figtree shea butter</p>
          </div> */}
          <div>
            <p className='text-sm font-bold'>Category</p>
            <p className='text-[#00000080] my-2'>{product?.category}</p>
          </div>
          <div>
            <p className='text-sm font-bold'>{product?.date.substring(0, 10)}</p>
            <p className='text-[#00000080] my-2'>Created At</p>
          </div>
          <div>
            <p className='text-sm font-bold'>N {product?.price} </p>
            <p className='text-[#00000080] my-2'>Price</p>
          </div>
        </div>
        <div className='border mt-4 rounded-xl p-4'>
          <div className='border-b py-3'>
            <p className='text-lg'>You're viewing product information below</p>
          </div>
          <div className='flex'>
            <div className='w-[70%]'>
              <p className='my-4 text-lg'>Product details</p>
              <p className='text-sm'>{product?.description}</p>
              <p className='my-4 text-lg'>Product Weight</p>
              <p className='text-sm'> {product?.weight}g</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default SingleProduct;