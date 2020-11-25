# Development

This project is a shopping website called "Fake Store". This online store sells men clothing, women clothing, electronics, and jewelry. 

## Website's Components

- Navigation bar at the top of the page, which includes
  - 2 filter categories
    - filter by category
    - filter by price range
  - 1 sorting feature
    - sort alphabetically by item's title
    - sort by price
  - 'View Cart' button, which displays a cart (the aggregate section), which is a collapse of the navigation bar. Inside the cart are
    - list of items the user puts inside the cart
    - price of each item
    - the number of items, with plus and minus sign so the user can add or remove items in the cart
    - 'Delete' button in each item to remove all units of that item from the cart
    - total price
    - 'Checkout' button 
- 20 items available for sale, displaying in a card with
  - image
  - category
  - description
  - price
  - 'Add to Cart' button

## js files in src

### React Classes
- App
  - fetches data of items available to sell from `https://fakestoreapi.com/products`
  - passes the data down to `Store.js`
- Store
  - holds states of the website, including
    - `filterCategory`: category the items are currently filtered by
    - `filterPrice`: price range the items are currently filtered by
    - `sort`: how the items are currently sorted by 
    - `cart`: list of items added into cart
    - `viewCart`: whether the collapse cart is displayed or hidden
  - connects changes made in `StoreNavbar.js`, `Cart.js` and `ProductsGrid.js`
- StoreNavbar
  - a navigation bar at the top of the website
  - holds filter and sorting dropdown and the 'View Cart' button
  - current filter and sorting features are highlighted 
  - If the 'View Cart' button is clicked, `Cart.js`, which is a collapse of the navigation bar, will be shown
  - received `viewCart`,  `filterCategory`, `filterPrice`, `sort` from `Store.js`
  - triggers `handleFilterCategorySubmit` in `Store.js` after changing the category to be filtered
  - triggers `handleFilterPriceSubmit` in `Store.js` after changing the price range to be filtered 
  - triggers `handleSortSubmit` in `Store.js` after changing how to sort the shown items
  - triggers `handleViewCart` in `Store.js` after clicking 'View Cart'/'Hide Cart' button (to show/hide the collapse cart)
- Cart
  - a collpase of the navigation bar
  - shown only if the 'View Cart' button in the navigation bar is clicked
  - hidden after click the 'Hide Cart' button in the navigation bar
  - displays the following
    - list of `CartItem.js`, where each `CartItem.js` displays a unique item
    - total number of items in the cart
    - total price of all items in the cart
  - received `viewCart` and `cart` from `Store.js`
  - also includes a modal that shows a checkout confirmation
- CartItem
  - a row of information about one unique item
  - displays the following
    - title of the item 
    - price of one unit
    - the number of units with '+' and '-' to add/remove item
  - received `item`, `amount` (i.e. current number of units of the item) from `Cart.js`
  - triggers `handleAddToCart` if the '+' button is clicked (i.e. adding one more unit to `cart`)
  - triggers `handleRemoveFromCart` if the '-' button is clicked (i.e. removing one unit from `cart`)
  - triggers `handleRemoveAllFromCart` if the 'Delete' button is clicked (i.e. removing all units of that item from `cart`)
- ProductsGrid
  - holds all cards of filtered items
  - filters and sorts items based on `filterCategory`, `filterPrice`, and `sort`
  - for each filtered item, add a `ProductItem.js`
  - received `products`, `filterCategory`, `filterPrice`, and `sort` from Store.js
  
- ProductItem
  - a card that displays information about a unique item
  - displays the following about an item
    - image
    - title
    - category
    - description
  - has the 'Add to Cart' button that will trigger `handleAddToCart` after it is clicked

### Other js files
- utils: utility functions including `removeDuplicate`, `countItems`, `roundNumber`, and `getTotalPrice`
- constants: constant values used in the project
