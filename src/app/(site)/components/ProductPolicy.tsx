import Driver from '@/components/Driver';
import Title from './ProductPolicyTitle';
import FormData from './ProductPolicyFormData';

const AgreementSubject = () => {
  return (
    <div>
      <Driver
        index={2}
        name='产品政策'
      />
      <Title />
      <FormData />
    </div>
  );
};

export default AgreementSubject;
