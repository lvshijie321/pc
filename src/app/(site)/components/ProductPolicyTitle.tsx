import Button from '@/components/withAntd/button';

export const ProductPolicyTitle = () => {
  const items = [
    {
      label: '购进总指标（万元）',
      value: '￥152.65',
    },
    {
      label: '指标按季度分解（万元）',
      value: '【Q1】￥12.5，【Q2】￥12.5，【Q3】￥12.5，【Q4】￥12.5',
    },
    {
      label: '纯销总指标（万元）',
      value: '￥152.6',
    },
  ].map((item, index) => {
    return {
      ...item,
      id: index + 1,
    };
  });

  return (
    <div className='flex 2xl:items-center  gap-4 2xl:flex-row flex-col pb-3'>
      <div>
        <Button type='primary'>添加产品</Button>
      </div>
      <div className='flex gap-x-12 overflow-hidden flex-col 2xl:flex-row'>
        {items.map((item) => (
          <div
            key={item.id}
            className='flex items-center overflow-hidden'
          >
            <label className='text-sm flex-none'>{item.label}：</label>
            <span className='text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap'>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPolicyTitle;
