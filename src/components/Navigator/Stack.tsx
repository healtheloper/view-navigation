import { ComponentPropsWithoutRef, ReactElement, createContext } from 'react';
import { styled } from 'styled-components';

import Button from '../Button';
import useStorageState from '../../hooks/useStorageState';
import TransitionLayout from '../TransitionLayout';
import { TransitionOption } from '../TransitionLayout/transition-layout.types';

type StackProps = {
  transitionOption?: TransitionOption;
  children: ReactElement[];
} & ComponentPropsWithoutRef<'div'>;

type ViewNavigationHistoryActions = {
  push: (screenName: string) => void;
  pop: () => void;
};

export const ViewNavigationHistoryContext =
  createContext<ViewNavigationHistoryActions | null>(null);

const Stack = (props: StackProps) => {
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

  return (
    <ViewNavigationHistoryContext.Provider value={actions}>
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
    </ViewNavigationHistoryContext.Provider>
  );
};

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
