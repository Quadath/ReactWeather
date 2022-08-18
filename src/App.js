import './App.css';
import { Input } from './components/input';
import { Card } from './components/card';

function App() {
  return (
    <div className="main">
      <Input />
      <div className='card-list'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
