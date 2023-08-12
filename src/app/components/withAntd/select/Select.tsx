import { Select } from 'antd';
import type { SelectProps } from 'antd';
import styles from './style.module.scss';

const WithForm: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <Select
      className={styles.select}
      {...props}
    ></Select>
  );
};

export default WithForm;
