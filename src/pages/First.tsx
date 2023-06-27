import { useViewNavHistoryAction } from '../components/Navigator/useViewNavHistoryAction';

const First = () => {
  const { push } = useViewNavHistoryAction();

  return (
    <div>
      <span>This is First</span>
      <button
        onClick={() => {
          push('Second');
        }}
      >
        Push Second
      </button>
    </div>
  );
};

export default First;
