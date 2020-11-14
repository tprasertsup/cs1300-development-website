import { useState } from 'react';
import './App.css';
import ProductsGrid from './ProductsGrid.js';
import StoreNavbar from './StoreNavbar.js';
import ProductsList from './ProductsList.js';
import Cart from './Cart.js';

function App() {
  const products = ProductsList();
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)
  const [cartItems, setCartItems] = useState({})
  const [viewCart, setViewCart] = useState(false)

  const handleFilterSubmit = (category, e) => setFilter(category)
  const handleSortSubmit = (sortBy, e) => setSort(sortBy)
  const handleViewCart = (e) => setViewCart(!viewCart)

  return (
    <div className="App">
      <header>
        <StoreNavbar
          viewCart={viewCart}
          onFilterSubmit={handleFilterSubmit}
          onSortSubmit={handleSortSubmit}
          onViewCart={handleViewCart} />
        <Cart
          viewCart={viewCart} />
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
