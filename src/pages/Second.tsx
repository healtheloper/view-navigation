import Button from '../components/Button';
import { useViewNavHistoryAction } from '../components/Navigator/useViewNavHistoryAction';

const Second = () => {
  const { push } = useViewNavHistoryAction();

  return (
    <div>
      <span>This is Second</span>
      <Button
        onClick={() => {
          push('First');
        }}
      >
        Push First
      </Button>
    </div>
  );
};

export default Second;
