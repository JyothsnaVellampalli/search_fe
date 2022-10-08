
import './App.css';
import {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Card from './card';

function App() {
  const [search, setSearch] = useState();
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    console.log(search);
    axios.get(`/getData/${search}`).then((response) => {
      console.log(response.data.adds);
      setAdds(response.data.adds);
    })
    
  }, [search])

  const dispalyAll = () => {
    axios.get('/getAll').then((response) => {
      setAdds(response.data.adds);
    })
  }

  return (
    <div className="App">
    <div className="App-search">
      <span className="searchbox">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search"/>
      </span>
      <button className="button" style={{'margin-left': '10px'}} onClick={dispalyAll}>Display All</button>
    </div>
    <div className="Add-Container">
        {adds.length > 0 ? adds.map((add) => 
        <div key={add.id} className="Add-Item">
        <Card add={add}/>
        </div>
        ) : <></>}
    </div>
    </div>
  );
}

export default App;
