import { useState, useEffect } from 'react';
import fetchData from './fetchData';
import Items from './Items'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setItems(response);
    })
  }, []);

  return (
    <Items items={items} />
  );
}

export default App;
