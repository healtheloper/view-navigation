import './App.css';
import Screen from './components/Navigator/Screen';
import Stack from './components/Navigator/Stack';

function App() {
  return (
    <div>
      <Stack>
        <Screen name='first'>
          <div>1</div>
        </Screen>
        <Screen name='second'>
          <div>2</div>
        </Screen>
      </Stack>
    </div>
  );
}

export default App;
