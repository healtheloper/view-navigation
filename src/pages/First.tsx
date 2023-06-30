import { ReactElement } from 'react';
import Button from '../components/Button';
import Second from './Second';

type FirstProps = {
  name: string;
  onNext: (component: ReactElement) => void;
};

const First = (props: FirstProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is First</span>
      <Button
        onClick={() => {
          onNext(<Second name='Second' onNext={onNext} />);
        }}
      >
        Push Second
      </Button>
    </div>
  );
};

export default First;
