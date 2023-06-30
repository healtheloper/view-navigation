import { ReactElement } from 'react';
import Button from '../components/Button';
import Second from './Second';

type FirstProps = {
  onNext: (screenName: string, component: ReactElement) => void;
};

const First = (props: FirstProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is First</span>
      <Button
        onClick={() => {
          onNext('Second', <Second onNext={onNext} />);
        }}
      >
        Push Second
      </Button>
    </div>
  );
};

export default First;
