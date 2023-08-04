import React from 'react';

const ReviewCard = () => {
  return (
    <div className='lg:w-[30%] lg:my-0 my-4'>
      <div className='flex'>
        <img className='w-1/2' src="/assets/before.png" alt="" />
        <img className='w-1/2' src="/assets/after.png" alt="" />
      </div>
      <div>
        <p className='text-[#F26122] text-lg text-center my-3'>Break out disappeared</p>
        <p>Yes, the fig neem soap is the truth, I had a bad break out and it really cleared my face also great value for money.</p>
        <p className='text-center underline'>Read more</p>
      </div>
    </div>
  );
};

export default ReviewCard;