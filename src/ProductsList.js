import React, { useEffect, useState } from 'react';

export default function ProductsList(props) {

    const [products, setproducts] = useState(null)

    const apiURL = "https://fakestoreapi.com/products"

    useEffect(() => {
        const fetchData = fetch(apiURL)
            .then(response => response.json())
            .then(json => {
                setproducts(json)
            })
    }, [setproducts]);

    return products;
}