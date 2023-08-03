import React from 'react';

const HeadingText = ({ text, index }: { text: string, index: string }) => {
  return (
    <div className='flex my-8 justify-center w-auto'>
      <h3 className='text-3xl'>{text}</h3>
      {
        index === '1' ? <img src="/assets/image-101.png" className='relative top-0 w-8 h-8' alt="" /> : <img src="/assets/image-89.png" className='relative w-8 h-8 top-0 ' alt="" />
      }
    </div>
  );
};

export default HeadingText;