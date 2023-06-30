import {
  ComponentPropsWithoutRef,
  ReactElement,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
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

export type ViewNavigationHistoryActions = {
  push: (screenName: string, component: ReactElement) => void;
  pop: () => void;
};

const screens: Record<string, ReactElement> = {};

const Stack = forwardRef(
  (props: StackProps, ref: Ref<ViewNavigationHistoryActions>) => {
    const {
      children,
      initHistory,
      transitionOption = { type: 'fade' },
    } = props;
    const [history, setHistory] = useStorageState('history', {
      defaultValue: [initHistory],
    });

    const isHistoryOnly = history.length === 1;
    const screenName = history[history.length - 1];
    const targetScreen = screens[screenName] || children;

    const actions = {
      push: (screenName: string, component: ReactElement) => {
        screens[screenName] = component;
        setHistory((prev) => [...prev, screenName]);
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
  }
);

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
