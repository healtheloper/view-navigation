import { ReactElement, useRef } from 'react';
import './App.css';
import Stack, {
  ViewNavigationHistoryActions,
} from './components/Navigator/Stack';
import First from './pages/First';

function App() {
  const stackRef = useRef<ViewNavigationHistoryActions>(null);

  const handleHistoryPush = (screenName: string, component: ReactElement) => {
    stackRef.current?.push(screenName, component);
  };

  return (
    <Stack ref={stackRef} initHistory='First'>
      <First onNext={handleHistoryPush} />
    </Stack>
  );
}

export default App;
