import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import AuthorReducer from "../slice/authorSlice";
import categoriReducer from "../slice/categorySlice";
import bookingsReducer from "../slice/bookingSlice";
import bookReducer from "../slice/bookSlice";
import preferitiReducer from '../slice/preferitiSlice'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const rootPersistConfig = {
    key: "root",
    storage,
    transforms: [
    ],
};

const rootReducer = combineReducers({
    authors: AuthorReducer,
    categorie: categoriReducer,
    bookings: bookingsReducer,
    libri: bookReducer,
    preferiti:preferitiReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);