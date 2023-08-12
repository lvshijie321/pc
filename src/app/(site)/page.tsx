import HeaderBread from '@/components/HeaderBread';
import AgreementSubject from './components/AgreementSubject';
import ProductPolicy from './components/ProductPolicy';
import SupplementPolicy from './components/SupplementPolicy';
import FooterButton from './components/FooterButton';

const Home = () => {
  return (
    <section className='h-full flex flex-col w-full'>
      <HeaderBread className='flex-none' />
      <div className='flex-1 overflow-y-auto px-[22px]'>
        <AgreementSubject />
        <ProductPolicy />
        <SupplementPolicy />
      </div>
      <FooterButton />
    </section>
  );
};

export default Home;
