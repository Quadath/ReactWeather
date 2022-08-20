import './App.css';
import { Input } from './components/input';
import { Card } from './components/card';

function App() {
  const citiesList = ['New York', 'Kyiv', 'London'];
  return (
    <div className="main">
      <Input />
      <div className='card-list'>
        {
          citiesList.map(city => <Card key={city} city={city}/>)
        }
      </div>
    </div>
  );
}

export default App;
