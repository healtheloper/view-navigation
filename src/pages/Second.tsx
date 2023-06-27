import { useViewNavHistoryAction } from '../components/Navigator/useViewNavHistoryAction';

const Second = () => {
  const { push } = useViewNavHistoryAction();

  return (
    <div>
      <span>This is Second</span>
      <button
        onClick={() => {
          push('First');
        }}
      >
        Push First
      </button>
    </div>
  );
};

export default Second;
