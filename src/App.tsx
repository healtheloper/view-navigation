import { useRef } from 'react';
import './App.css';
import Screen from './components/Navigator/Screen';
import Stack, {
  ViewNavigationHistoryActions,
} from './components/Navigator/Stack';
import First from './pages/First';
import Second from './pages/Second';

function App() {
  const stackRef = useRef<ViewNavigationHistoryActions>(null);

  const handleHistoryPush = (screenName: string) => {
    stackRef.current?.push(screenName);
  };

  return (
    <Stack ref={stackRef}>
      <Screen name='First'>
        <First onNext={handleHistoryPush} />
      </Screen>
      <Screen name='Second'>
        <Second onNext={handleHistoryPush} />
      </Screen>
    </Stack>
  );
}

export default App;
