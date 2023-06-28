import FadeLayout from './FadeLayout';
import SlideLayout from './SlideLayout';
import { TransitionLayoutProps } from './transition-layout.types';

const TransitionLayout = (props: TransitionLayoutProps) => {
  const { type, transitionKey, children } = props;
  switch (type) {
    case 'fade':
      return <FadeLayout transitionKey={transitionKey}>{children}</FadeLayout>;
    case 'slide':
      return (
        <SlideLayout transitionKey={transitionKey}>{children}</SlideLayout>
      );
    case 'none':
      return <>{children}</>;
    default:
      throw Error('Transition Type 이 유효하지 않습니다.');
  }
};

export default TransitionLayout;
