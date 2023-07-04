import { ADD_CART, ADD_FAVOURITE, REMOVE_CART, REMOVE_FAVOURITE, SET_TOKEN, SET_USER } from "../actions/UserActions";

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
        fatture: []
    },
    auth: {},
    cart: [],
    favourite: []
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
                favourite: action.payload,
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
                cart: action.payload,
            }

        case REMOVE_CART:
            return {
                ...state,
                cart: {
                    ...state.cart.content.slice(0, action.payload),
                    ...state.cart.content.slice(action.payload + 1),
                },
            }

        default:
            return state;
    }
};
export default UserReducer;