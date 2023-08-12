import { Input } from 'antd';
import type { InputProps } from 'antd';
import styles from './style.module.scss';

type WithInputProps = Omit<InputProps, 'allowClear'>;

const WithForm: React.FC<WithInputProps> = ({ ...props }) => {
  return (
    <Input
      allowClear
      className={styles.select}
      {...props}
    ></Input>
  );
};

export default WithForm;
