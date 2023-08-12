'use client';

import React, { useMemo, useRef, useState } from 'react';
import { Button, DatePicker, Table } from 'antd';
import WithTag from '@/components/withAntd/tag';
import WithForm from '@/components/withAntd/form';
import WithFormItem from '@/components/withAntd/formItem';
import WithTable from '@/components/withAntd/table';
import WithSelect from '@/components/withAntd/select';
import WithInput from '@/components/withAntd/input';
import dayjs from 'dayjs';
import { ColumnsType } from 'antd/es/table';

const FormData: React.FC = () => {
  const formItemLayout = { labelCol: { span: 3 } };

  const columns: ColumnsType<DataType> = [
    {
      title: '指定渠道编码',
      dataIndex: 'code',
    },
    {
      title: '指定渠道名称',
      dataIndex: 'name',
    },
    {
      title: '所在省',
      dataIndex: 'addr',
    },
  ];

  const data: DataType[] = [
    {
      code: 'BJ000090',
      name: '宁波九州',
      addr: '浙江省',
      key: '1',
    },
    {
      code: 'BJ000091',
      name: '国药有限公司',
      addr: '浙江省',
      key: '2',
    },
    {
      code: 'BJ000092',
      name: '老百姓药业有限公司',
      addr: '浙江省',
      key: '3',
    },
  ];
  return (
    <WithForm
      {...formItemLayout}
      initialValues={{
        status: '1',
        buyTarget: {
          type: '1',
          count: 0,
        },
        saleTarget: {
          type: '1',
          count: 0,
        },
        time: dayjs('2023/08/10 07:50', 'YYYY-MM-DD HH:mm'),
        channel: '1',
      }}
    >
      <WithFormItem
        label='协议客户'
        name='custom'
        rules={[{ required: true, message: '请选择协议客户' }]}
      >
        <div className='flex items-center gap-2 overflow-hidden'>
          <Button style={{ width: 100 }}>选择客户</Button>
          <span className='text-sm text-[#868686] text-ellipsis overflow-hidden whitespace-nowrap'>
            上海正也医药有限公司
          </span>
        </div>
      </WithFormItem>
      <WithFormItem
        label='协议状态'
        name='status'
      >
        <WithSelect
          style={{ width: 195 }}
          options={[{ value: '1', label: '正常' }]}
        />
      </WithFormItem>
      <WithFormItem
        label='购进指标'
        name='buyTarget'
      >
        <TargetInput />
      </WithFormItem>
      <WithFormItem
        label='纯销指标'
        name='saleTarget'
      >
        <TargetInput />
      </WithFormItem>
      <WithFormItem
        label='销售区域'
        name='saleArea'
      >
        <div className='flex items-center gap-2 overflow-hidden'>
          <Button style={{ width: 100 }}>选择区域</Button>
          <div>
            <WithTag
              color='blue'
              closable
            >
              全国
            </WithTag>
          </div>
        </div>
      </WithFormItem>
      <WithFormItem
        label='签订时间'
        name='time'
      >
        <DatePicker
          style={{ width: 460 }}
          format='YYYY-MM-DD HH:mm'
          showTime
          suffixIcon={null}
        />
      </WithFormItem>
      <WithFormItem
        label='购进渠道'
        name='channel'
      >
        <Channel />
      </WithFormItem>

      <WithFormItem oneLine>
        <div className='pl-16 w-full'>
          <WithTable<DataType>
            columns={columns}
            dataSource={data}
          />
        </div>
      </WithFormItem>
    </WithForm>
  );
};

interface ChannelProps {
  value?: string;
}

interface DataType {
  key: React.Key;
  name: string;
  code: string;
  addr: string;
}

const Channel: React.FC<ChannelProps> = ({ value }) => {
  return (
    <div className='flex gap-3 overflow-hidden'>
      <WithSelect
        style={{ width: 100 }}
        value={value}
        options={[{ value: '1', label: '指定渠道' }]}
      />
      <Button>请选择渠道</Button>
    </div>
  );
};

interface TargetValueProps {
  type: string;
  count: number;
}

interface TargetProps {
  value?: TargetValueProps;
  onChange?: (value: TargetValueProps) => void;
}

const TargetInput: React.FC<TargetProps> = ({ value, onChange }) => {
  const [type, setType] = useState(value?.type);
  const [count, setCount] = useState(value?.count || '');
  const disabled = useMemo(() => {
    return !type;
  }, [type]);

  const changeType = (value: string) => {
    setCount('');
    if (value) {
      setType(value);
    }
  };
  const changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value) {
      setCount(value);
    }
    if (type && value) {
      onChange?.({ type, count: value });
    }
  };

  return (
    <div className='flex gap-3 overflow-hidden'>
      <WithSelect
        value={type}
        style={{ width: 100 }}
        options={[
          { value: '1', label: '金额' },
          { value: '2', label: '数量' },
        ]}
        onChange={changeType}
      />
      <WithInput
        value={count}
        placeholder='输入金额/数量'
        style={{ width: 348 }}
        disabled={disabled}
        onChange={changeCount}
      />
    </div>
  );
};

export default FormData;
