import { Form } from 'antd';
import type { FormProps } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

type WithForm = {
  children: React.ReactNode;
  className?: string;
} & FormProps;

const WithForm: React.FC<WithForm> = ({ children, className, ...props }) => {
  return (
    <Form
      className={clsx(styles.form, className)}
      {...props}
    >
      {children}
    </Form>
  );
};

export default WithForm;
