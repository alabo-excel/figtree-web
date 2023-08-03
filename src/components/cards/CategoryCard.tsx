import React from 'react';

const CategoryCard = ({ img, text }: { img: string, text: string }) => {
  return (
    <div className='lg:w-[20%] mx-auto'>
      <img className='mx-auto w-[60%]' src={'/assets/categories/' + img} alt="" />
      <p className='text-center my-3 text-lg'>{text}</p>
    </div>
  );
};

export default CategoryCard;