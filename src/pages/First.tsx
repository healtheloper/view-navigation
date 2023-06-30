import Button from '../components/Button';
import Second from './Second';
import { ScreenComponentProps } from '../components/Navigator/screen.types';

type FirstProps = ScreenComponentProps<'div'>;

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
