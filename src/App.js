import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import { Link, RedLink } from './components/Link';
import { Table, TableHeader } from './components/Table';
import { linkArray, linkArrayColumns } from './data/data';

function App() {
  return (
    <div className="App">
        <Table data={linkArray} columns={linkArrayColumns}/>
        <hr/>
        <Form/>
    </div>
  );
}

export default App;
