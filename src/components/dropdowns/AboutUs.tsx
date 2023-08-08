import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const AboutUs = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href={'/about'}>About Us</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href={'/blog'}>Blog</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href={'/careers'}>Careers</Link>
      ),
    }
  ]
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          About Us
          <img src="/assets/icons/dropdown.png" alt="" />
          {/* <DownOutlined /> */}
        </Space>
      </a>
    </Dropdown>
  );
};

export default AboutUs;