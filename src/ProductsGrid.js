import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem.js';
import cloneDeep from 'lodash/cloneDeep';

export default function ProductsGrid(props) {

    let modifiedProducts = cloneDeep(props.products);
    modifiedProducts = props.filter ? modifiedProducts.filter(item => item.category === props.filter) : modifiedProducts
    if (props.sort === "alphabet") {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
    } else if (props.sort === "price asc") {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.price < b.price) { return -1; }
            if (a.price > b.price) { return 1; }
            return 0;
        })
    } else if (props.sort === "price desc") {
        modifiedProducts = modifiedProducts.sort(function (a, b) {
            if (a.price < b.price) { return 1; }
            if (a.price > b.price) { return -1; }
            return 0;
        })
    }

    return (
        <div class="d-flex flex-wrap justify-content-center bd-highlight mb-3 product">
            {modifiedProducts &&
                modifiedProducts.map((product) => <ProductItem product={product} />)}
        </div>

    );
}