import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions/FavouriteAction";

const favState = {
    favourite: {
        content: [],
    }
}

const FavouriteReducer = (state = favState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default FavouriteReducer;