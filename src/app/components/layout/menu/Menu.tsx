'use client';

import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import styles from './styles.module.scss';
import clsx from 'clsx';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('功能1', 'sub1', <MailOutlined />, [
    getItem('功能1 - 1', 'sub11'),
    getItem('功能1 - 2', 'sub12'),
  ]),

  getItem('功能2', 'sub2', <AppstoreOutlined />, [
    getItem('功能2 - 1', 'sub21'),
    getItem('功能2 - 2', 'sub22'),
  ]),

  getItem('功能3', 'sub3', <SettingOutlined />, [
    getItem('功能3 - 1', 'sub31'),
    getItem('功能3 - 2', 'sub32'),
  ]),
];

const Menu_ = () => {
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className={clsx('bg-[#2A3139] pr-[2px]', styles.menu)}
      theme={'dark'}
      onClick={onClick}
      defaultOpenKeys={['sub1']}
      selectedKeys={[current]}
      mode='inline'
      items={items}
    />
  );
};

export default Menu_;
