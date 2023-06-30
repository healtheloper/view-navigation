import Button from '../components/Button';
import First from './First';
import { ScreenComponentProps } from '../components/Navigator/screen.types';

type SecondProps = ScreenComponentProps<'div'>;

const Second = (props: SecondProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is Second</span>
      <Button
        onClick={() => {
          onNext(<First name='First' onNext={onNext} />);
        }}
      >
        Push First
      </Button>
    </div>
  );
};

export default Second;
