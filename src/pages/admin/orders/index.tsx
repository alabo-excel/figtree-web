import AdminLayout from '@/layout/AdminLayout';
import React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Delivery from '@/components/Delivery';

const Orders = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Delivery',
      children: <Delivery />,
    },
    {
      key: '2',
      label: 'Pickup',
      children: 'Content of Tab Pane 2',
    }
  ];
  return (
    <AdminLayout>
      <div>
        <p className='font-bold text-2xl'>Orders</p>
        <div className='my-4 border rounded-t-xl'>
          <div className='flex justify-between p-4'>
            <div className=''>
              <p className='text-xl'>All Orders</p>
              <p className='my-2'>You're viewing all orders below</p>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} size='large'  />
        </div>
      </div>
    </AdminLayout>

  );
};

export default Orders;