import ShopBanner from '@/components/ShopBanner';
import CartCard from '@/components/cards/CartCard';
import MainLayout from '@/layout/MainLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart, setCount } from "@/store/slices/cartSlice.js"
import { useDispatch } from 'react-redux';
import { clearCart } from '@/store/slices/cartSlice';
import { ProductType } from '@/types/Applicant.types';
import { getCookie } from 'cookies-next';
import axios from 'axios';
import ProductCard from '@/components/cards/ProductCard';

const Cart = () => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch();
  const author = getCookie('user')
  const [suggestion, setSuggestion] = useState<ProductType[]>([])

  const getSuggestion = async () => {
    try {
      const { data } = await axios.get('product')
      console.log(data)
      setSuggestion(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSuggestion()
  }, [
    author
  ])

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Shopping Cart" />
        <div className='flex p-8'>
          <div className='w-full'>
            {
              cart.map((item: ProductType, index: React.Key | null | undefined) => <CartCard pos={index} key={index} item={item} />)
            }
            <div className='border-t border-t-gray my-6'></div>
            <div className='float-right'>
              <p className='font-bold text-xl'>Subtotal (1 item): N4500</p>
              <p className='my-4'>Looking for more? <Link href={'/shop'}> <span className='text-orange'> Continue Shopping</span> </Link></p>
            </div>

            <div className='mt-32'>
              <h1 className='text-4xl font-bold'>Your items</h1>
              <div className='flex text-xl my-5'>
                <p className='cursor-pointer'>Save for later</p>
                <p className='ml-8 cursor-pointer'>Buy it again</p>
              </div>
              <div className='border-t border-t-gray my-6'></div>
              <div className='flex justify-between flex-wrap'>
                {suggestion.slice(0, 8).map((item, index) =>
                  <ProductCard item={item} key={index} />
                )}
              </div>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='text-center p-10 shadow-lg rounded-md'>
              <p className='font-bold text-xl'>Subtotal (1 item): N4500</p>
              <button className='p-3 rounded-md w-full bg-warning my-4'>Proceed to checkout</button>
            </div>
            <div className='shadow-lg rounded-md p-6 mt-6'>
              <p className='text-center font-bold'>Customers who bought items in your recent history also bought </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;