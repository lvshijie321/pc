'use client';

import clsx from 'clsx';
import Menu from './menu';
import Image from 'next/image';
import { AiOutlineCrown } from 'react-icons/ai';
import { useState } from 'react';

interface Sidebar {
  className?: string;
}

export const Sidebar: React.FC<Sidebar> = ({ className }) => {
  const [visible, setVisible] = useState(false);
  return (
    <aside
      className={clsx('w-52 h-full bg-[#2A3139] flex flex-col', className)}
    >
      <div className='h-20 flex flex-col items-center justify-center flex-none overflow-hidden'>
        <div
          className={clsx(
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
            'duration-300 ease-in',
          )}
        >
          <div className='flex gap-1 items-center -ml-[2px]'>
            <Image
              src={'/images/logo.png'}
              alt={'Logo'}
              width={80}
              height={29}
              onLoad={() => setVisible(true)}
            />
            <div className='w-[72px] h-5 bg-gray-700 opacity-75 rounded-md flex items-center justify-center text-yellow-400'>
              <AiOutlineCrown size={20} />
              <span className='text-xs italic'>旗舰版</span>
            </div>
          </div>
          <div className='text-white opacity-75 text-xs mt-1 scale-90 ml-[-5px]'>
            上海正也医药有限公司
          </div>
        </div>
      </div>
      <div className='flex-1 overflow-hidden'>
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
