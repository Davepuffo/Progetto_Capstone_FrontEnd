import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/UserReducer";
import storage from "redux-persist/lib/storage";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
//import { formExpReducer } from "../reducers/formExpReducer";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducers = combineReducers({
    user: UserReducer,

    //altri reducers
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
