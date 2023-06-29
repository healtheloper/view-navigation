import {
  ComponentPropsWithoutRef,
  ReactElement,
  Ref,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { styled } from 'styled-components';

import Button from '../Button';
import useStorageState from '../../hooks/useStorageState';
import TransitionLayout from '../TransitionLayout';
import { TransitionOption } from '../TransitionLayout/transition-layout.types';

type StackProps = {
  transitionOption?: TransitionOption;
  children: ReactElement[];
} & ComponentPropsWithoutRef<'div'>;

export type ViewNavigationHistoryActions = {
  push: (screenName: string) => void;
  pop: () => void;
};

const Stack = forwardRef(
  (props: StackProps, ref: Ref<ViewNavigationHistoryActions>) => {
    const { children, transitionOption = { type: 'fade' } } = props;
    const initHistory = [children[0].props.name] as string[];
    const [history, setHistory] = useStorageState('history', {
      defaultValue: initHistory,
    });
    const isHistoryOnly = history.length === 1;

    const targetScreen = children.find(
      (child) => child.props.name === history[history.length - 1]
    );

    const actions = {
      push: (screenName: string) => {
        setHistory((prev) => [...prev, screenName]);
      },
      pop: () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
      },
    };

    useImperativeHandle(ref, () => actions);

    return (
      <TransitionLayout
        type={transitionOption.type}
        transitionKey={history[history.length - 1]}
      >
        <StackHeader>
          {!isHistoryOnly && <Button onClick={actions.pop}>{'<'}</Button>}
          <h1>{targetScreen?.props.name}</h1>
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
