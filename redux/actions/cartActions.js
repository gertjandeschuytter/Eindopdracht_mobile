export const addItem = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}