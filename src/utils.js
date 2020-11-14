import React, { useEffect, useState } from 'react';

export const removeDuplicate = (list) => {
    list.slice() // slice makes copy of array before sorting it
        .sort(function (a, b) {
            return a.id > b.id;
        })
        .reduce(function (a, b) {
            if (a.length === 0 || a.slice(-1)[0].id !== b.id) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
            return a;
        }, []); // this empty array becomes the 
}

export const countItems = (list, id) => list.filter((item) => item.id === id).length;

export const getProductList = () => {
    let productList = null
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((responseJson) => {
            productList = responseJson
        })
        .catch((error) => {
            console.error(error);
        });

    return productList
}