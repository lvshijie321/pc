'use client';

import Driver from '@/components/Driver';
import Tabs from '@/components/withAntd/tabs';
import Form from '@/components/withAntd/form';
import FormItem from '@/components/withAntd/formItem';
import Button from '@/components/withAntd/button';
import { useState } from 'react';
import styles from './SupplementPolicy.module.scss';
import { Input } from 'antd';

const { TextArea } = Input;

const TextForm = () => {
  return (
    <Form
      layout='vertical'
      className={styles.form}
    >
      <div className='flex items-center justify-between w-full py-2'>
        <span>协议内容：</span>
        <Button
          type='warn'
          ghost
        >
          删除
        </Button>
      </div>
      <FormItem name='name'>
        <TextArea className={styles.textArea} />
      </FormItem>
    </Form>
  );
};

export const SupplementPolicy = () => {
  const items = [
    { label: `补充协议1`, key: '1', component: <TextForm key={1} /> },
    { label: `补充协议2`, key: '2', component: <TextForm key={2} /> },
    { label: `补充协议3`, key: '3', component: <TextForm key={3} /> },
  ];

  const [active, setActive] = useState(items[0].key);

  return (
    <div>
      <Driver
        index={3}
        name={'补充协议'}
      />
      <Tabs
        activeKey={active}
        type='card'
        items={items}
        onChange={(value) => setActive(value)}
      />

      {items.find((item) => item.key === active)!.component}
    </div>
  );
};

export default SupplementPolicy;
