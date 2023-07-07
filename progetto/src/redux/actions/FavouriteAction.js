export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = (favourite) => {
    return {
        type: ADD_FAVOURITE,
        payload: favourite,
    }
}

export const removeFavourite = (i) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: i,
    }
}