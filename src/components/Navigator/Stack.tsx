import {
  ComponentPropsWithoutRef,
  ReactElement,
  createContext,
  useState,
} from 'react';
import { styled } from 'styled-components';
import Button from '../Button';

type StackProps = {
  children: ReactElement[];
} & ComponentPropsWithoutRef<'div'>;

type ViewNavigationHistoryActions = {
  push: (screenName: string) => void;
  pop: () => void;
};

export const ViewNavigationHistoryContext =
  createContext<ViewNavigationHistoryActions | null>(null);

const Stack = (props: StackProps) => {
  const { children } = props;
  const initHistory = [children[0].props.name];
  const [history, setHistory] = useState(initHistory);
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
      <StackHeader>
        {!isHistoryOnly && <Button onClick={actions.pop}>{'<'}</Button>}
        <h1>{targetScreen?.props.name}</h1>
      </StackHeader>
      {targetScreen}
    </ViewNavigationHistoryContext.Provider>
  );
};

const StackHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin-bottom: 1rem;
  width: 100%;
  button {
    margin-right: 1rem;
  }
`;

export default Stack;
