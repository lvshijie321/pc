import { Breadcrumb } from 'antd';
import clsx from 'clsx';

interface HeaderBreadProps {
  className?: string;
}

export const HeaderBread: React.FC<HeaderBreadProps> = ({ className }) => {
  const breadItems = [
    {
      href: '/',
      title: '首页',
    },
    {
      href: '/',
      title: '年度协议管理',
    },
    {
      href: '/',
      title: '二级商协议',
    },
    {
      title: '新增二级商协议',
    },
  ];

  return (
    <div
      className={clsx(
        'h-[82px] border-b flex flex-col justify-center gap-1.5 px-8 bg-white',
        className,
      )}
    >
      <Breadcrumb items={breadItems} />
      <h1>新增二级商协议</h1>
    </div>
  );
};

export default HeaderBread;
