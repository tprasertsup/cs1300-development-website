import { useState } from 'react';
import './App.css';
import ProductsGrid from './ProductsGrid.js';
import StoreNavbar from './StoreNavbar.js';
import ProductsList from './ProductsList.js';

function App() {
  const products = ProductsList();
  console.log(products);
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)

  const handleFilterSubmit = (category, e) => {
    setFilter(category)
    console.log(category)
  }
  const handleSortSubmit = (sortBy, e) => {
    setSort(sortBy)
    console.log(sortBy)
  }

  return (
    <div className="App">
      <header>
        <StoreNavbar
          onFilterSubmit={handleFilterSubmit}
          onSortSubmit={handleSortSubmit} />
      </header>
      <body class="text-center">
        <ProductsGrid
          products={products}
          key={filter + sort}
          filter={filter}
          sort={sort} />
      </body>
    </div>
  );
}

export default App;
