'use client';

import { AiOutlineCloudSync, AiOutlineHome } from 'react-icons/ai';
import { FaFolderTree } from 'react-icons/fa6';
import { FiGlobe } from 'react-icons/fi';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { wait } from '@/app/utils';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const commmonList = [
    {
      icon: AiOutlineHome,
      label: '首页',
    },
    {
      icon: AiOutlineCloudSync,
      label: '主数据',
    },
    {
      icon: FaFolderTree,
      label: '辖区管理',
    },
  ];

  const [visible, setVisible] = useState(false);

  const onload = async () => {
    await wait(1000);
    setVisible(true);
  };
  return (
    <nav className={clsx('h-20 bg-header-pattern px-12', className)}>
      <div className='flex gap-5 lg:gap-10 h-full w-full overflow-hidden'>
        <div className='flex gap-5 lg:gap-10 overflow-hidden'>
          {commmonList.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className='flex items-center gap-2 hover:opacity-60 transition cursor-pointer'
            >
              <div className='w-10 h-10 rounded-md bg-gray-400 opacity-75 flex justify-center items-center flex-none'>
                <Icon
                  size={25}
                  className='text-white opacity-75'
                />
              </div>
              <span className='text-gray-400 whitespace-nowrap  text-ellipsis overflow-hidden hidden lg:inline-block'>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          className={clsx(
            'flex items-center gap-2 flex-none duration-200 ease-in-out',
            visible ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className='w-10 h-10 rounded-md bg-[#49C265] flex justify-center items-center'>
            <FiGlobe
              size={25}
              className='text-white opacity-75'
            />
          </div>
          <div className={clsx('flex flex-col translate-y-[2px]')}>
            <Image
              width={62}
              height={20}
              src={'/images/xiaoxuntong.png'}
              alt={'销讯通'}
              onLoad={onload}
            />
            <p className='text-gray-400 text-sm scale-[0.7] ml-[-12px]'>
              行为管理系统
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
