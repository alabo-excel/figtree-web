import AdminLayout from '@/layout/AdminLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { UserType } from '@/types/Applicant.types';

const Dashboard = () => {
  interface DataType {
    no: string;
    info: string;
    data: string;
    amount: string;
    order: string;
  }
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const { data } = await axios.get('users')
      console.log(data)
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Order No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Customer Information',
      dataIndex: 'info',
      key: 'info',
    },
    {
      title: 'Date',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Order Status',
      dataIndex: 'order',
      key: 'order',
    },
  ];

  const data: DataType[] = [
    {
      no: '183u3',
      info: 'John Brown',
      data: '32',
      amount: 'New York No. 1 Lake Park',
      order: "Processing"
    },
  ];

  return (
    <AdminLayout>
      <div>
        <p className='font-bold text-lg'>Overview</p>
        <div className='flex justify-between'>
          <div className='rounded-3xl w-[32%] p-6 bg-[#FFCE071A]'>
            <img src="/assets/icons/income.png" alt="" />
            <p className='my-3'>Total Income</p>
            <p className='text-3xl font-black'>N100,000.00</p>
          </div>
          <div className='rounded-3xl p-6 w-[32%] bg-[#00AF4D1A]'>
            <img src="/assets/icons/customers.png" alt="" />
            <p className='my-3'>Total Customers</p>
            <p className='text-3xl font-black'>{users?.length}</p>
          </div>
          <div className='rounded-3xl p-6 w-[32%] bg-[#F261221A]'>
            <img src="/assets/icons/orders.png" alt="" />
            <p className='my-3'>Total Orders</p>
            <p className='text-3xl font-black'>10</p>
          </div>
        </div>
        <div className='flex justify-between mt-6'>
          <div className='w-[64%]'>
            <p className='font-bold text-lg'>Recent Orders</p>
            <Table columns={columns} dataSource={data} />
          </div>
          <div className='w-[32%]'>
            <p className='font-bold text-lg'>Recent Customers</p>
            <div className='bg-[#F5F6FF] rounded-3xl'>
              {users.map(user => <div className='p-3 flex border-b border-[#0000001A]'>
                <img src="/assets/icons/user.png" className='h-14 my-auto' alt="" />
                <div className='ml-3 my-auto'>
                  <p>{user.fName} {user.lName}</p>
                  <p className='text-xs'>{user.email}</p>
                </div>
              </div>)}
              <Link href={'/admin/customers'}>
                <p className='text-xs text-center p-3'>View all</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;