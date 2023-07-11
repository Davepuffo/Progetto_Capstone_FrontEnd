export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const EMPTY_CART = "EMPTY_CART";

export const addCart = (articolo) => {
    return {
        type: ADD_CART,
        payload: articolo,
    }
}

export const removeCart = (i) => {
    return {
        type: REMOVE_CART,
        payload: i,
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        payload: [],
    }
}