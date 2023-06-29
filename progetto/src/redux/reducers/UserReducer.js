import { SET_TOKEN, SET_USER } from "../actions/UserActions";

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
    auth: {}
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

        default:
            return state;
    }
};
export default UserReducer;