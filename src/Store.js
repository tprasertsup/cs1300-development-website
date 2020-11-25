import { useState } from 'react';
import './App.css';
import ProductsGrid from './ProductsGrid.js';
import StoreNavbar from './StoreNavbar.js';
import Cart from './Cart.js';

/**
 * Store holds states of the website and connect navigation bar, cart, and product display together.
 * 
 *  Props include products, which is a list of products available for sale got from fetching API in App
 */
export default function Store(props) {

    const /** string */[filterCategory, setFilterCategory] = useState(null)
    const /** string */[filterPrice, setFilterPrice] = useState(null)
    const /** string */[sort, setSort] = useState(null)
    const /** Array<obj> */[cart, setCart] = useState([]);
    const /** boolean */[viewCart, setViewCart] = useState(false)

    /**
     * Set filtering category passed from StoreNavbar
     * @param {category} constant (string) indicating category to be filtered
     */
    const handleFilterCategorySubmit = (category, e) => setFilterCategory(category)

    /**
     * Set filtering price passed from StoreNavbar
     * @param {level} constant (number) indicating price range to be filtered
     */
    const handleFilterPriceSubmit = (level, e) => setFilterPrice(level)

    /**
     * Set sorting category passed from StoreNavbar
     * @param {level} constant (number) indicating how the filtered items are sorted
     */
    const handleSortSubmit = (sortBy, e) => setSort(sortBy)

    /**
     * Change boolean viewCart after a 'View/Hide Cart' button in StoreNavbar is clicked
     */
    const handleViewCart = (e) => setViewCart(!viewCart)

    /**
     * Add one unit of the item to the cart
     * @param {added} an item to be added to cart
     */
    const handleAddToCart = (added, e) => {
        setCart([...cart, added])
    }

    /**
     * Remove one unit of the item from the cart
     * @param {removed} an item to be removed from cart
     */
    const handleRemoveFromCart = (removed, e) => {
        const productIndex = cart.findIndex(item => item.id === removed.id);
        if (productIndex >= 0) {
            const update = [...cart];
            update.splice(productIndex, 1)
            setCart(update)
        }
    }

    /**
     * Remove every unit of the item from the cart
     * @param {removed} an item to be removed from cart
     */
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