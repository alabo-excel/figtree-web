import { ProductType } from '@/types/Applicant.types';
import React, { useEffect, useState } from 'react';
import { setCount } from "@/store/slices/cartSlice.js"
import { useDispatch } from 'react-redux';
import { removeCart } from '@/store/slices/cartSlice';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const CartCard = ({ item, pos }: { item: ProductType, pos: React.Key | null | undefined }) => {
  const [count, setCoun] = useState<number | any>(item.count)
  const dispatch = useDispatch();
  const author = getCookie('user')

  const remove = () => {
    dispatch(removeCart(pos))
  }

  const setProductCount = () => {
    dispatch(setCount({ count, id: item._id }))
  }

  useEffect(() => {
    setProductCount()
  }, [count])

  const addSaved = async () => {
    try {
      const { data } = await axios.post('save', {
        product: item._id,
        author
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='flex'>
      <div>
        <img className='w-72' src={item.image[0]} alt="" />
      </div>
      <div className='ml-8'>
        <h1 className='text-3xl font-bold'>{item.title}</h1>
        <p className='my-2'>N {item.price}</p>
        <div className='my-6'>
          <p className='text-xs'>Quantity</p>
          <div className='relative w-32 my-2'>
            <div onClick={() => setCoun(count > 1 ? count - 1 : 1)} className='absolute top-2 text-2xl cursor-pointer left-2'>-</div>
            <input type="number" onChange={(e) => setCoun(e.target.value)} value={count} className='p-3 text-center border px-10 w-32 ' />
            <div onClick={() => setCoun(count + 1)} className='absolute top-2 text-2xl cursor-pointer right-2'>+</div>
          </div>
        </div>
        <div className='flex text-orange'>
          <p onClick={() => remove()} className='cursor-pointer'>Delete</p>
          <p onClick={() => addSaved()} className='ml-10 cursor-pointer'>Save for later</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;