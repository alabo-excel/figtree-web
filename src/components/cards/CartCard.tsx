import React, { useState } from 'react';

const CartCard = () => {
  const [count, setCount] = useState<number | any>(1)

  return (
    <div className='flex'>
      <div>
        <img className='w-72' src="/assets/ing1.png" alt="" />
      </div>
      <div className='ml-8'>
        <h1 className='text-3xl font-bold'>FigTree Pure Jojoba Oil</h1>
        <p>N4 500.00</p>
        <div className='my-6'>
          <p className='text-xs'>Quantity</p>
          <div className='relative w-32 my-2'>
            <div onClick={() => setCount(count > 1 ? count - 1 : 1)} className='absolute top-2 text-2xl cursor-pointer left-2'>-</div>
            <input type="number" onChange={(e) => setCount(e.target.value)} value={count} className='p-3 text-center border px-10 w-32 ' />
            <div onClick={() => setCount(count + 1)} className='absolute top-2 text-2xl cursor-pointer right-2'>+</div>
          </div>
        </div>
        <div className='flex text-orange'>
          <p className='cursor-pointer'>Delete</p>
          <p className='ml-10 cursor-pointer'>Save for later</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;