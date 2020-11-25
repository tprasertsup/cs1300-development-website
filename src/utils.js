/**
 * Remove duplicate items in the list
 */
export const removeDuplicate = (list) => {
    const sorted = list.sort((a, b) => a.id - b.id)
    return sorted.reduce(function (a, b) {
        if (a.length === 0 || a.slice(-1)[0].id !== b.id) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
        return a;
    }, []);
}

/**
 * Count the number of items in the list with the same id as the input's
 */
export const countItems = (list, input) => list.filter((item) => item.id === input.id).length

/**
 * Return a round number of float (for fixing weird behaviors when adding float in Javascript)
 */
export const roundNumber = (num) => parseFloat(Number(num).toFixed(4))

/**
 * Calculate the total price of all items in the list
 */
export const getTotalPrice = (list) => list.reduce((acc, item) => acc + item.price, 0)