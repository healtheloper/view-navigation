import './App.css';
import Screen from './components/Navigator/Screen';
import Stack from './components/Navigator/Stack';
import First from './pages/First';
import Second from './pages/Second';

function App() {
  return (
    <Stack>
      <Screen name='First'>
        <First />
      </Screen>
      <Screen name='Second'>
        <Second />
      </Screen>
    </Stack>
  );
}

export default App;
