'use client';

import { DatePicker } from 'antd';
import Form from '@/components/withAntd/form';
import FormItem from '@/components/withAntd/formItem';
import Button from '@/components/withAntd/button';
import dayjs from 'dayjs';
import Table from '@/components/withAntd/table';
import { ColumnsType } from 'antd/es/table';
import Input from '@/components/withAntd/input';
import Select from '@/components/withAntd/select';
import styles from './productPolicyFormData.module.scss';
import clsx from 'clsx';

const { RangePicker } = DatePicker;

interface DataType {
  key: React.Key;
}

export const ProductPolicyFormData = () => {
  // @ts-ignore
  const columns1: ColumnsType<DataType> = [
    {
      title: '协议价（元）',
      fixed: 'left',
    },
    {
      title: '票折（元）',
    },
    {
      title: '购进指标量（大单位）',
    },
    {
      title: '购进指标量（小单位）',
    },
    {
      title: '购进金额（万元）',
    },
    {
      title: '纯销指标量（小单位）',
    },
    {
      title: '纯销指标量（万元）',
      fixed: 'right',
    },
  ].map((item) => {
    return {
      ...item,
      render: () => (
        <Input
          placeholder='请输入'
          disabled
        />
      ),
    };
  });

  const data: DataType[] = [
    {
      key: '2',
    },
  ];

  // @ts-ignore
  const columns: ColumnsType<DataType> = [
    {
      title: '分销奖励',
      type: 'input',
      fixed: 'left',
    },
    {
      title: '费用科目',
      type: 'select',
    },
    {
      title: '零售配送',
      type: 'input',
    },
    {
      title: '费用科目',
      type: 'select',
    },
    {
      title: '医疗配送商',
      type: 'input',
    },
    {
      title: '费用科目',
      type: 'select',
    },
    {
      title: '自定义7',
      type: 'input',
    },
    {
      title: '自定义8',
      type: 'input',
      fixed: 'right',
    },
  ].map((item) => {
    const { type } = item;
    return {
      ...item,
      render: () =>
        type === 'input' ? (
          <Input
            placeholder='请输入'
            disabled
          />
        ) : (
          <Select
            defaultValue='1'
            options={[{ value: '1', label: '多选项1' }]}
          />
        ),
    };
  });

  const data1: DataType[] = [
    {
      key: '1',
    },
  ];

  return (
    <Form
      className={clsx('py-[14px]', styles.form)}
      layout='inline'
      initialValues={{
        date: [
          dayjs('2023/08/10', 'YYYY-MM-DD'),
          dayjs('2023/08/11', 'YYYY-MM-DD'),
        ],
      }}
    >
      <div className='flex justify-between w-full items-center gap-x-3 pl-10 pr-4'>
        <div className='flex gap-x-14 flex-col lg:flex-row gap-y-2'>
          <FormItem
            label='产品：'
            name='name'
          >
            <ProductInput />
          </FormItem>
          <FormItem
            label='协议效期：'
            name='date'
          >
            <RangePicker
              style={{ width: 230 }}
              format='YYYY-MM-DD'
              showTime
              suffixIcon={null}
            />
          </FormItem>
        </div>

        <Button
          type='warn'
          ghost
        >
          删除
        </Button>
      </div>
      <hr className='w-full border-b-[2px] border-[#eeeeee]' />
      <FormItem className={styles.tableFormItem}>
        <Table<DataType>
          scroll={{ x: 1500 }}
          columns={columns1}
          dataSource={data1}
        />
      </FormItem>
      <FormItem className={styles.tableFormItem}>
        <Table<DataType>
          scroll={{ x: 1500 }}
          columns={columns}
          dataSource={data}
        />
      </FormItem>
    </Form>
  );
};

const ProductInput = () => {
  return (
    <div className='flex items-center gap-3'>
      <Button type='primary'>选择产品</Button>
      <div className='text-[#1677ff] gap-2 flex'>
        <span>美服胶囊</span>
        <span>24粒/盒</span>
      </div>
    </div>
  );
};

export default ProductPolicyFormData;
