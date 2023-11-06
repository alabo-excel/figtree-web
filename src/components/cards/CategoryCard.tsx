import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ img, text }: { img: string, text: string }) => {
  return (
    <div className='lg:w-[20%] w-[35%] mx-auto'>
      <img className='mx-auto w-[60%]' src={'/assets/categories/' + img} alt="" />
      <Link href={`/shop/category?page=${text}`} className='lg:mr-20  mr-6 w-full'><p className='text-center my-3 text-lg'>{text}</p></Link>
    </div>
  );
};

export default CategoryCard;