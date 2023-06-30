import { ReactElement, useRef } from 'react';
import './App.css';
import Stack, {
  ViewNavigationHistoryActions,
} from './components/Navigator/Stack';
import First from './pages/First';

function App() {
  const stackRef = useRef<ViewNavigationHistoryActions>(null);

  const handleHistoryPush = (component: ReactElement) => {
    stackRef.current?.push(component);
  };

  return (
    <Stack ref={stackRef} initHistory='First'>
      <First name='First' onNext={handleHistoryPush} />
    </Stack>
  );
}

export default App;
