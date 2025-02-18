import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slice/cartSlice";
import { categoryReducer } from "./slice/categorySlice";
import { persistStore, persistReducer } from "redux-persist";
import { userReducer } from "./slice/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  timeout: 2000,
};

const rootReducer = combineReducers({
  cartState: cartReducer,
  categoryState: categoryReducer,
  userState: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
