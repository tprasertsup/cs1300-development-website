import React, { useEffect, useState } from 'react';
import './App.css';
import Store from './Store.js';
// import ProductsList from './ProductsList.js';

function App() {
  const [products, setproducts] = useState(null)

  const apiURL = "https://fakestoreapi.com/products"

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => {
        setproducts(json)
      })
  }, [setproducts]);

  console.log(products)

  return (
    <div className="App">
      <Store products={products} />
    </div>
  );
}

export default App;