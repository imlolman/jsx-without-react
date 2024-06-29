import Button from './Button';

const App = () => (
  <div class="app">
    <Button onClick={() => alert(1)}>Click 11</Button>
    <Button onClick={() => alert(2)}>Click 12</Button>
    <Button onClick={() => alert(3)}>Click 13</Button>
    <Button onClick={() => alert(4)}>Click 14</Button>
  </div>
);

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
