import { useState, useEffect } from 'react';
import './App.css';
import Store from './Store.js';
import { APIURL } from './constants';

/**
 * App is the top-level component that fetches API for the list of products available for sale 
 * and passes that to Store, which connects all the components in the website
 */
function App() {
  const [products, setproducts] = useState(null)

  useEffect(() => {
    const fetchData = fetch(APIURL)
      .then(response => response.json())
      .then(json => {
        setproducts(json)
      })
  }, [setproducts]);

  return (
    <div className="App">
      <Store products={products} />
    </div>
  );
}

export default App;
