import Button from '../components/Button';

type FirstProps = {
  onNext: (screenName: string) => void;
};

const First = (props: FirstProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is First</span>
      <Button
        onClick={() => {
          onNext('Second');
        }}
      >
        Push Second
      </Button>
    </div>
  );
};

export default First;
