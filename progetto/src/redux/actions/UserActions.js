export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

export const setUser = (profile) => {
    const url = "http://localhost:8080/user/" + profile.username;
    return (dispatch) => {
        try {
            fetch(url, {
                headers: {
                    Authorization: profile.tokenType + profile.accessToken,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    dispatch({
                        type: SET_USER,
                        payload: data,
                    })
                });
        } catch (error) {
            console.log(error);
        }
    };
};

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token,
    };
};

export const addFavourite = (favourite) => {
    return {
        type: ADD_FAVOURITE,
        payload: favourite,
    }
}

export const removeFavourite = (favourite) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: favourite,
    }
}

export const addCart = (articolo) => {
    return {
        type: ADD_CART,
        payload: articolo,
    }
}

export const removeCart = (articolo) => {
    return {
        type: REMOVE_CART,
        payload: articolo,
    }
}

