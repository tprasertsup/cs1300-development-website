import { useState } from 'react';
import './App.css';
import ProductsGrid from './ProductsGrid.js';
import StoreNavbar from './StoreNavbar.js';
import Cart from './Cart.js';
import { countItems, roundNumber } from './utils';
import { remove, round } from 'lodash';

export default function Store(props) {

    const [filterCategory, setFilterCategory] = useState(null)
    const [filterPrice, setFilterPrice] = useState(null)
    const [sort, setSort] = useState(null)
    const [cart, setCart] = useState([]);
    const [viewCart, setViewCart] = useState(false)

    const handleFilterCategorySubmit = (category, e) => setFilterCategory(category)
    const handleFilterPriceSubmit = (level, e) => setFilterPrice(level)
    const handleSortSubmit = (sortBy, e) => setSort(sortBy)
    const handleViewCart = (e) => setViewCart(!viewCart)

    const handleAddToCart = (added, e) => {
        setCart([...cart, added])
    }

    const handleRemoveFromCart = (removed, e) => {
        const productIndex = cart.findIndex(item => item.id === removed.id);
        if (productIndex >= 0) {
            const update = [...cart];
            update.splice(productIndex, 1)
            setCart(update)
        }
    }

    const handleRemoveAllFromCart = (removed, e) => {
        setCart(cart.filter(item => item.id != removed.id))
    }

    return (
        <div>
            <header>
                <StoreNavbar
                    key={cart}
                    viewCart={viewCart}
                    filterCategory={filterCategory}
                    filterPrice={filterPrice}
                    sort={sort}
                    onFilterCategorySubmit={handleFilterCategorySubmit}
                    onFilterPriceSubmit={handleFilterPriceSubmit}
                    onSortSubmit={handleSortSubmit}
                    onViewCart={handleViewCart} />
                <Cart
                    viewCart={viewCart}
                    cart={cart}
                    onAddItem={handleAddToCart}
                    onRemoveItem={handleRemoveFromCart}
                    onDelete={handleRemoveAllFromCart} />
            </header>
            <body class="text-center">
                <ProductsGrid
                    products={props.products}
                    key={filterCategory + filterPrice + sort}
                    filterCategory={filterCategory}
                    filterPrice={filterPrice}
                    sort={sort}
                    onAddToCart={handleAddToCart} />
            </body>
        </div>
    );
}