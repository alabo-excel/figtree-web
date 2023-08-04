import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const About = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="About Us" />
        <div className='lg:p-8 p-4 lg:mx-32 text-lg'>
          <h1 className='text-3xl text-orange font-bold text-center my-4'>WE'RE FIGTREE</h1>
          <p>At Figtree, we are dedicated to crafting exceptional skincare and haircare products that harness the power of nature. We believe in the inherent beauty and nourishing properties of natural ingredients and our mission is to provide you with safe and effective solutions for your skin and hair</p> <br />
          <p>We understand that what we put on our bodies is just as important as what put in them. That's why we have carefully curated a range of skincare and haircare formulations that are free from harmful chemicals and take care of various hair and skin concerns </p> <br />
          <p>Our products are meticulously crafted using a blend of plant based ingredients, botanical extracts and essential oils known for their beneficial properties. We prioritize natural and sustainably sources ingredients to ensure the highest quality and purity in our formulations  </p> <br />
          <p>We believe that self-care should be an enjoyable ritual .Our products do not only provide effective solutions but also creates a sensorial experience that pampers your senses and promotes a sense of well-being. We want you to feel the love and care  we put into every bottle and jar, allowing you to indulge in a moment of self-care that leaves you feeling refreshed and rejuvenated   </p>

          <div className='lg:flex justify-between my-6'>
            <div className='lg:w-[40%] my-auto'>
              <h1 className='text-3xl text-orange my-6 font-bold'>Our Mission</h1>
              <p>To provide women with natural skincare and haircare products that are safe, effective and promote overall well being</p>
              <h1 className='text-3xl text-orange my-6 font-bold'>Our Vision</h1>
              <p>To be the leading brand in the industry, known for our commitment to producing high quality products that prioritize safety and deliver exceptional results</p>
            </div>
            <div className='lg:w-[40%]'>
              <img src="/assets/about-img1.png" className='w-full' alt="" />
            </div>
          </div>
          <div className='lg:flex justify-between my-10'>
            <div className='lg:w-[40%]'>
              <img src="/assets/about-img1.png" className='w-full' alt="" />
            </div>
            <div className='lg:w-[40%] my-auto'>
              <h1 className='text-3xl text-orange my-6 font-bold'>Our Core Values</h1>
              <ul>
                <li className='my-3'><strong>Natural</strong>: Figtree only uses natural ingredients in its products</li>
                <li className='my-3'><strong>Safe</strong>: Figtree products are made from natural ingredients that are safe for all skin and hair types</li>
                <li className='my-3'><strong>Effective</strong>: The brands products are effective in improving the appearance/overall wellbeing of the skin and hair</li>
                <li className='my-3'><strong>Inclusive</strong>: Figtree celebrates all kinds of hair and skin types</li>
              </ul>
            </div>
          </div>
          <div className='lg:flex justify-between my-10'>
            <div className='lg:w-[40%]'>
              <img src="/assets/about-img2.png" className='w-full' alt="" />
            </div>
            <div className='lg:w-[40%] my-auto'>
              <h1 className='text-3xl text-orange my-6 font-bold'>Brand Story</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos deserunt nobis eius veritatis voluptatum provident veniam ullam unde. Quo nulla corporis laborum? Distinctio harum iste in quas deserunt dolorum quo a perspiciatis ab facere, tenetur, explicabo veniam, consectetur quis. Sapiente inventore, delectus quas accusamus ex ratione excepturi itaque ut eum libero? Fugiat provident, id sequi magnam facere ab voluptas excepturi natus cum repudiandae eius soluta deserunt corrupti doloribus sed!</p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;