import { ADD_CART, EMPTY_CART, REMOVE_CART } from "../actions/CartAction";

const cartState = {
    cart: {
        items: [],
    },
}

const CartReducer = (state = cartState, action) => {
    switch (action.type) {
        case ADD_CART:
            if (state.cart.items == undefined) {
                return {
                    ...state,
                    cart: {
                        items: [action.payload]
                    },
                }
            } else {
                return {
                    ...state,
                    cart: {
                        items: [...state.cart.items, action.payload]
                    },
                }
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: {
                    items: [
                        ...state.cart.items.slice(0, action.payload),
                        ...state.cart.items.slice(action.payload + 1),
                    ],
                },
            }

        case EMPTY_CART:
            return {
                cart: {
                    items: action.payload
                }
            }

        default:
            return state;
    }
};

export default CartReducer;