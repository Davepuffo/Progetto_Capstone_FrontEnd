import { ADD_CART, REMOVE_CART } from "../actions/CartAction";

const cartState = {
    cart: {
        items: [],
    },
}

const CartReducer = (state = cartState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                cart: {
                    items: [...state.cart.items, action.payload]
                },

            }
        case REMOVE_CART:
            return {
                cart: {
                    items: [
                        ...state.cart.items.slice(0, action.payload),
                        ...state.cart.items.slice(action.payload + 1),
                    ],
                },
            }

        default:
            return state;
    }
};

export default CartReducer;