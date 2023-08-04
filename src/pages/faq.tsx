import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <p className='text-orange font-bold text-lg'>What locations do you deliver to?</p>,
    children: <p>We do deliveries both within and outside Lagos. We also ship internationally (worldwide) through DHL.</p>,
  },
  {
    key: '2',
    label: <p className='text-orange font-bold text-lg'>Which payment method do you accept?</p>,
    children: <p>We do deliveries both within and outside Lagos. We also ship internationally (worldwide) through DHL.</p>,
  },
  {
    key: '3',
    label: <p className='text-orange font-bold text-lg'>How many branches does Figtree company have?</p>,
    children: <p>Figtree Company has three(3) physical stores in Lekki and Victoria Island, Lagos. However, you can also get our products at any of our distributors all over the world.</p>,
  },
  {
    key: '4',
    label: <p className='text-orange font-bold text-lg'>Do you sell whitening products?</p>,
    children: <p>No, we don't sell bleaching products. We sell natural, chemical and preservatives free products that brighten your skin naturally, by taking out all skin blemishes and giving you a naturally glowing skin.</p>,
  },
  {
    key: '5',
    label: <p className='text-orange font-bold text-lg'>How do I become a Figtree company distributor</p>,
    children: <p>Distributors of Figtree products is open to interested persons all over the world. Prospective distributors are required to pay a one-off registration fee of N10,000 (Ten Thousand Naira Only). The distributor shall have the option of physically coming to the store for documentation, or having the agreement form sent to them via email. After the payment and documentation, they will be sent a wholesale price list.   </p>,
  },
  {
    key: '6',
    label: <p className='text-orange font-bold text-lg'>Do you have something for stretch mark</p>,
    children: <p>The Figtree Brighten range of products clears stretch marks overtime. However, the Figtree Brightening Body Butter with Turmeric and Fade out cream effectively clears old scars and stretch marks</p>,
  },
];

const Faq = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <MainLayout>
      <div>
        <ShopBanner text="FAQ" />
        <div className='lg:w-[70%] mx-auto lg:p-8 p-4'>
          <h1 className='text-3xl text-center my-4'>How Can We Help?</h1>
          <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Faq;