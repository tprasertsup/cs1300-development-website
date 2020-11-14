import { useState } from 'react';
import './App.css';
import ProductsGrid from './ProductsGrid.js';
import StoreNavbar from './StoreNavbar.js';
import Cart from './Cart.js';

export default function Store(props) {
    const [filter, setFilter] = useState(null)
    const [sort, setSort] = useState(null)
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(new Map(props.products.map(item => [item.id, 0])));
    console.log(cart);
    const [viewCart, setViewCart] = useState(false)

    console.log(cart);

    const handleFilterSubmit = (category, e) => setFilter(category)
    const handleSortSubmit = (sortBy, e) => setSort(sortBy)
    const handleViewCart = (e) => setViewCart(!viewCart)
    const handleAddToCart = (item, e) => {
        // setCart(cart.concat(item))
    }

    return (
        <div className="App">
            <header>
                <StoreNavbar
                    viewCart={viewCart}
                    onFilterSubmit={handleFilterSubmit}
                    onSortSubmit={handleSortSubmit}
                    onViewCart={handleViewCart} />
                <Cart
                    viewCart={viewCart}
                    cart={cart}
                />
            </header>
            <body class="text-center">
                <ProductsGrid
                    products={props.products}
                    key={filter + sort}
                    filter={filter}
                    sort={sort}
                    onAddToCart={handleAddToCart} />
            </body>
        </div>
    );
}
