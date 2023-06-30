import { ReactElement } from 'react';
import Button from '../components/Button';
import First from './First';

type SecondProps = {
  onNext: (screenName: string, component: ReactElement) => void;
};

const Second = (props: SecondProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is Second</span>
      <Button
        onClick={() => {
          onNext('First', <First onNext={onNext} />);
        }}
      >
        Push First
      </Button>
    </div>
  );
};

export default Second;
