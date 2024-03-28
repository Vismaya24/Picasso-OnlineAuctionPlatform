import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserSlice from "./UserSlice";
import cartSlice from "./cartSlice"; 
import wishlistSlice from "./wishlistSlice";

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = {
  user: persistReducer(persistConfig, UserSlice.reducer),
  cart: persistReducer(persistConfig, cartSlice),
  wishlist: persistReducer(persistConfig, wishlistSlice)
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store, null, (error) => {
  console.log(error);
});

export { store, persistor };