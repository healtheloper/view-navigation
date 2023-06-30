import {
  ComponentPropsWithoutRef,
  ReactElement,
  Ref,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { styled } from 'styled-components';

import Button from '../Button';
import useStorageState from '../../hooks/useStorageState';
import TransitionLayout from '../TransitionLayout';
import { TransitionOption } from '../TransitionLayout/transition-layout.types';

type StackProps = {
  initHistory: string;
  transitionOption?: TransitionOption;
  children: ReactElement;
} & ComponentPropsWithoutRef<'div'>;

export type StackActions = {
  push: (component: ReactElement) => void;
  pop: () => void;
};

const Stack = forwardRef((props: StackProps, ref: Ref<StackActions>) => {
  const { children, initHistory, transitionOption = { type: 'fade' } } = props;
  const [history, setHistory] = useStorageState('history', {
    defaultValue: [initHistory],
  });
  const [screens, setScreens] = useState<Record<string, ReactElement>>({});

  const isHistoryOnly = history.length === 1;
  const screenName = history[history.length - 1];
  const targetScreen = screens[screenName] || children;

  const actions = {
    push: (component: ReactElement) => {
      setScreens((prev) => ({
        ...prev,
        [component.props.name]: component,
      }));
      setHistory((prev) => [...prev, component.props.name]);
    },
    pop: () => {
      setHistory((prev) => prev.slice(0, prev.length - 1));
    },
  };

  useImperativeHandle(ref, () => actions);

  return (
    <TransitionLayout type={transitionOption.type} transitionKey={screenName}>
      <StackHeader>
        {!isHistoryOnly && <Button onClick={actions.pop}>{'<'}</Button>}
        <h1>{screenName}</h1>
      </StackHeader>
      {targetScreen}
    </TransitionLayout>
  );
});

const StackHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  button {
    margin-right: 1rem;
  }
`;

export default Stack;
