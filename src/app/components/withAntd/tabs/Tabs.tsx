import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './style.module.scss';
import Button from '@/components/withAntd/button';

function WithTabs(props: TabsProps) {
  return (
    <div className='flex justify-between items-center'>
      <Tabs
        className={styles.tabs}
        {...props}
      ></Tabs>
      <Button
        type='primary'
        className='mr-[20px] mb-2'
      >
        新增
      </Button>
    </div>
  );
}

export default WithTabs;
