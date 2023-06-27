import {
  ComponentPropsWithoutRef,
  ReactElement,
  createContext,
  useMemo,
  useState,
} from 'react';

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
      <div>
        {!isHistoryOnly && <button onClick={actions.pop}>{'<'}</button>}
        <h1>{targetScreen?.props.name}</h1>
      </div>
      {targetScreen}
    </ViewNavigationHistoryContext.Provider>
  );
};

export default Stack;
