import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

type Type = ButtonProps['type'];

type WithButton = {
  children: React.ReactNode;
  type: Type | 'warn';
} & Omit<ButtonProps, 'type'>;

const WithButton: React.FC<WithButton> = ({ children, type, ...props }) => {
  let localType = type;
  if (type === 'warn') {
    type = undefined;
  }
  return (
    <Button
      className={clsx(styles.button, localType && styles[localType])}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};

export default WithButton;
