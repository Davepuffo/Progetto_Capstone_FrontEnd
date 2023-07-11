export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";

export const setUser = (profile) => {
    const url = "http://localhost:8080/user/" + profile.username;
    console.log(url);
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

export const logOut = () => {
    return {
        type: LOGOUT,
        payload: {},
    };
};


