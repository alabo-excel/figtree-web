import { configureStore } from '@reduxjs/toolkit';
// import { userSlice } from "./slices/userSlice.js"
import { cartSlice } from "./slices/cartSlice.js"
import { userSlice } from "./slices/userSlice.js"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers(
  {
    // [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [userSlice.name]: userSlice.reducer

  }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)