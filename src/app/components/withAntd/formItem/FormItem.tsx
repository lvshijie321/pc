import { Form } from 'antd';
import type { FormItemProps } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

type WithFormItemProps = {
  children: React.ReactNode;
  oneLine?: boolean;
} & FormItemProps;

const WithFormItem: React.FC<WithFormItemProps> = ({
  children,
  oneLine,
  ...props
}) => {
  return (
    <Form.Item
      className={clsx(styles.formItem, oneLine && styles.oneLine)}
      {...props}
    >
      {children}
    </Form.Item>
  );
};

export default WithFormItem;
