import { ComponentPropsWithoutRef, ReactElement, useState } from 'react';

type StackProps = {
  children: ReactElement[];
} & ComponentPropsWithoutRef<'div'>;

const Stack = (props: StackProps) => {
  const { children, ...restProps } = props;
  const initHistory = [children[0].props.name];
  const [history, setHistory] = useState(initHistory);

  const targetScreen = children.find(
    (child) => child.props.name === history[history.length - 1]
  );

  return <div>{targetScreen}</div>;
};

export default Stack;
