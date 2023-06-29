import Button from '../components/Button';

type SecondProps = {
  onNext: (screenName: string) => void;
};

const Second = (props: SecondProps) => {
  const { onNext } = props;

  return (
    <div>
      <span>This is Second</span>
      <Button
        onClick={() => {
          onNext('First');
        }}
      >
        Push First
      </Button>
    </div>
  );
};

export default Second;
