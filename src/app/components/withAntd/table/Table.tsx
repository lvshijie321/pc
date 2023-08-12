import { Table } from 'antd';
import type { TableProps } from 'antd';
import styles from './style.module.scss';
import { AnyObject } from 'antd/es/_util/type';

function WithTable<T extends AnyObject>(props: TableProps<T>) {
  return (
    <Table
      pagination={false}
      className={styles.table}
      {...props}
    ></Table>
  );
}

export default WithTable;
