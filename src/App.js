import {useState} from 'react';
import data from './components/Data';
import List from './components/List';
import './App.css';

function App() {

  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <div className="App">
      <h3>{data.length} birthdays today</h3>
      <div className='List'>
        <List people={people} />
      </div>
      <button onClick={_ => setPeople([])}>Clear</button>
    </div>
  );
}

export default App;
