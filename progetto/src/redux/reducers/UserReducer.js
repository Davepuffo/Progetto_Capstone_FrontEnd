import { ADD_CART, ADD_FAVOURITE, REMOVE_CART, REMOVE_FAVOURITE, SET_TOKEN, SET_USER, REMOVE_USER } from "../actions/UserActions";

const initialState = {
    user: {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        roles: [],
        indirizzi: [],
        ordini: [],
        fatture: [],
    },
    auth: {},
    cart: {
        items: [],
    },
    favourite: {
        content: [],
    }
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };

        case SET_TOKEN:
            return {
                ...state,
                auth: action.payload,
            };

        case ADD_FAVOURITE:
            return {
                ...state,
                favourite: {
                    content: [...state.favourite.content, action.payload],
                },
            }

        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourite: {
                    ...state.favourite.content.slice(0, action.payload),
                    ...state.favourite.content.slice(action.payload + 1),
                },
            }

        case ADD_CART:
            return {
                ...state,
                cart: {
                    items: [...state.cart.items, action.payload]
                },

            }
        case REMOVE_CART:
            return {
                ...state,
                cart: {
                    cartItems: {
                        ...state.cart.content.slice(0, action.payload),
                        ...state.cart.content.slice(action.payload + 1)
                    },
                    pezzi: state.cart.pezzi - 1,
                },
            }


        default:
            return state;
    }
};

export default UserReducer;

