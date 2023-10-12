import { createRoot } from 'react-dom/client';

const App = () => {
  console.log('Whattup though');

  return (
    <h1>King Of The Cards</h1>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);