export const removeDuplicate = (list) => {
    const sorted = list.sort((a, b) => a.id - b.id)
    return sorted.reduce(function (a, b) {
        if (a.length === 0 || a.slice(-1)[0].id !== b.id) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
        return a;
    }, []); // this empty array becomes the 
}

export const countItems = (list, id) => list.filter((item) => item.id === id).length

export const roundNumber = (num) => parseFloat(Number(num).toFixed(4))

export const getTotalPrice = (list) => list.reduce((acc, item) => acc + item.price, 0)