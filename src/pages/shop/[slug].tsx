import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import React, { useState } from 'react';

const SingleProduct = () => {
  const [count, setCount] = useState<number | any>(1)
  const [desc, setDesc] = useState<boolean>(true)

  const products = [
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
  ]
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Product Details" />
        <div className='flex p-10'>
          <div className='w-[40%]'>
            <img className='w-full' src="/assets/ing1.png" alt="" />
          </div>
          <div className='w-[40%] ml-20 my-auto p-2'>
            <h2 className='text-4xl font-bold'>FigTree Karkar oil
              (170g)</h2>
            <p className='my-2'>N4 500.00</p>
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
              <p>Figtree Pure Shea Butter</p>
              <p className='text-2xl my-4'>Product Details</p>
              <p>FIGTREE KARKAR OIL is a wonder oil for hair and skin. I t is made with sesame seed oil and other oils. This rich, nutriously rich sudanese oil can thicken the hair, reduce dandruff and improve hair growth. It can be used as a moisturizer for the skin. It works even better with Figtree Chebe Powder </p>
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