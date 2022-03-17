import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost/shoppinglist/';


function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

useEffect(() => {
  axios.get(URL)
  .then((response) => {
    setItems(response.data)
  }).catch(error => {
    alert(error.response ? error.response.data.error : error);
    });
}, [])


function add(e) {
  e.preventDefault();
  const json = JSON.stringify({description:item});
  axios.post(URL + 'add.php',json, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((response) => {
    setItems(items => [...items,response.data]);
    setItem('');
  }).catch(error => {
    alert(error.response ? error.response.data.error : error);
  })
}


  return (
    
    <div>
      <form onSubmit={add}>
      <h3>Shopping list</h3>
      <input value={item} placeholder="Type description" type="text" onChange={e => setItem(e.target.value)}></input>
      <input placeholder="Type amount" type="number"></input>
      <button>Add</button>
      </form>
      <ul>
        {items?.map(item =>(
          <li key={item.id}>{item.description}{" "}{item.amount}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
