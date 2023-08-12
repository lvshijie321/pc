import Driver from '@/components/Driver';
import AgreementSubjectFormData from './AgreementSubjectFormData';

const AgreementSubject = () => {
  return (
    <div>
      <Driver
        index={1}
        name='协议主体'
      />
      <AgreementSubjectFormData />
    </div>
  );
};

export default AgreementSubject;
