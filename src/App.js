import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost/shoppinglist/';


function App() {
  const [items, setItems] = useState([]);

useEffect(() => {
  axios.get(URL)
  .then((response) => {
    //console.log(response.data);
    setItems(response.data)
  }).catch(error => {
    alert(error);
  })

}, [])

  return (
    
    <div>
      <h3>Shopping list</h3>
      <input></input>
      <input type="number"></input>
      <input type="button" value="Add"></input>
      <ul>
        {items?.map(task =>(
          <li key={items.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
