import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const Resources = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href={'/contact'}>Contact Us</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href={'/faq'}>FAQ</Link>
      ),
    }
  ]
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Resources
          <img src="/assets/icons/dropdown.png" alt="" />
          {/* <DownOutlined /> */}
        </Space>
      </a>
    </Dropdown>
  );
};

export default Resources;