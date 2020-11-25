import React from 'react';
import ProductItem from './ProductItem.js';
import cloneDeep from 'lodash/cloneDeep';
import * as Constants from './constants';


/**
 * ProductGrid holds cards of the filtered and sorted list of products
 * 
 *  Props include filterCategory, filterPrice, sort, and products
 */
export default function ProductsGrid(props) {

    let modifiedProducts = cloneDeep(props.products);

    /** Filter and sort the list of products (props.products) first*/

    // filter by category
    if (props.filterCategory) {
        modifiedProducts = modifiedProducts.filter(item => item.category === props.filterCategory)
    }

    // filter by price
    if (props.filterPrice === Constants.PRICE_LOW) {
        modifiedProducts = modifiedProducts.filter(item => item.price < 10)

    } else if (props.filterPrice === Constants.PRICE_MID) {
        modifiedProducts = modifiedProducts.filter(item => (item.price >= 10 && item.price < 100))

    } else if (props.filterPrice === Constants.PRICE_HIGH) {
        modifiedProducts = modifiedProducts.filter(item => item.price >= 100)
    }

    // sort
    if (props.sort === Constants.SORT_ALPHABET) {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
    } else if (props.sort === Constants.SORT_PRICE_ASC) {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.price < b.price) { return -1; }
            if (a.price > b.price) { return 1; }
            return 0;
        })
    } else if (props.sort === Constants.SORT_PRICE_DESC) {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.price < b.price) { return 1; }
            if (a.price > b.price) { return -1; }
            return 0;
        })
    }

    return (
        <div class="d-flex flex-wrap justify-content-center bd-highlight mb-3 product">
            {modifiedProducts &&
                modifiedProducts.map((product) => <ProductItem product={product} onAddToCart={props.onAddToCart} />)}
            {modifiedProducts.length === 0 && <h4 class="mt-5">No items found in the selected category and price range</h4>}
        </div>

    );
}