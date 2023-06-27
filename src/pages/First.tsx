import Button from '../components/Button';
import { useViewNavHistoryAction } from '../components/Navigator/useViewNavHistoryAction';

const First = () => {
  const { push } = useViewNavHistoryAction();

  return (
    <div>
      <span>This is First</span>
      <Button
        onClick={() => {
          push('Second');
        }}
      >
        Push Second
      </Button>
    </div>
  );
};

export default First;
