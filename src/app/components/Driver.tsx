interface DriverProps {
  index: number;
  name: string;
}

const HrLine = () => {
  return (
    <hr className='flex-1 bg-driver bg-repeat-x h-full bg-center bg-[length:10px_1px]' />
  );
};

const Driver: React.FC<DriverProps> = ({ index, name }) => {
  return (
    <div className='h-12 flex'>
      <HrLine />
      <div className='flex  items-center gap-2 px-7'>
        <span className='rounded-full bg-[#4F8CFF] w-4 h-4 text-white flex justify-center items-center font-medium text-sm'>
          {index}
        </span>
        <span className='font-semibold'>{name}</span>
      </div>
      <HrLine />
    </div>
  );
};

export default Driver;
