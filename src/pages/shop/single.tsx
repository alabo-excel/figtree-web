import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SingleProduct = () => {
  const [count, setCount] = useState<number | any>(1)
  const [desc, setDesc] = useState<boolean>(true)
  const [product, setProduct] = useState<ProductType>()
  const [products, setProducts] = useState<ProductType[]>([])
  const { query } = useRouter()

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`product/${query.page}`)
      console.log(data[0])
      setProduct(data[0])
    } catch (err) {
      console.log(err)
    }
    try {
      const { data } = await axios.get(`suggest`)
      console.log(data)
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Product Details" />
        <div className='flex p-10'>
          <div className='w-[40%]'>
            <img className='w-full' src={product?.image[0]} alt="" />
          </div>
          <div className='w-[40%] ml-20 my-auto p-2'>
            <h2 className='text-4xl font-bold'>{product?.title}</h2>
            <p className='my-2'>N {product?.price}</p>
            <p className='text-xs'>Shipping calculated at checkout</p>
            <div className='my-6'>
              <p className='text-xs'>Quantity</p>
              <div className='relative w-32 my-2'>
                <div onClick={() => setCount(count > 1 ? count - 1 : 1)} className='absolute top-2 text-2xl cursor-pointer left-2'>-</div>
                <input type="number" onChange={(e) => setCount(e.target.value)} value={count} className='p-3 text-center border px-10 w-32 ' />
                <div onClick={() => setCount(count + 1)} className='absolute top-2 text-2xl cursor-pointer right-2'>+</div>
              </div>
            </div>
            <button className='p-4 w-full bg-warning rounded-sm my-4'>Add to cart</button>
            <button className='p-4 w-full bg-black rounded-sm my-4 text-white'>Buy it now</button>
          </div>
        </div>
        <div className='p-8'>
          <div className='flex'>
            <p onClick={() => setDesc(!desc)} className='text-2xl cursor-pointer'>Description</p>
            <p onClick={() => setDesc(!desc)} className='text-2xl ml-10 cursor-pointer'>Reviews</p>
          </div>
          <hr />
          {
            desc ? <div>
              <p className='text-2xl my-4'>What is this?</p>
              <p>{product?.title}</p>
              <p className='text-2xl my-4'>Product Details</p>
              <p>{product?.description}</p>
            </div> : <div></div>
          }
          <div>
            <p className='text-2xl my-4'>Suggested for you</p>
            <div className="lg:flex justify-between">
              {products.map((item, index) => (
                <ShopCard item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleProduct;