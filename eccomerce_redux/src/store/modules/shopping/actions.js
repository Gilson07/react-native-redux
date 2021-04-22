export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

export function removeProduct(id) {
    return {
        type: 'REMOVE_PRODUCT',
        id,
    }
}

export function updateAmountProduct(id, amount) {
    return {
        type: 'UPDATE_PRODUCT',
        id,
        amount
    }
}