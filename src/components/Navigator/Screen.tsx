import { ComponentPropsWithoutRef } from 'react';

type ScreenProps = {
  name: string;
} & ComponentPropsWithoutRef<'div'>;

const Screen = (props: ScreenProps) => {
  const { children } = props;
  return <>{children}</>;
};

export default Screen;
