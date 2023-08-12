import { Tag } from 'antd';
import type { TagProps } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

type WithTagProps = {
  children: React.ReactNode;
} & TagProps;

const WithTag: React.FC<WithTagProps> = ({ children, ...props }) => {
  return (
    <Tag
      className={clsx(styles.tag, props.color && styles[props.color])}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default WithTag;
