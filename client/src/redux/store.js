import {combineReducers, configureStore } from '@reduxjs/toolkit'
// import { buildGetDefaultEnhancers } from '@reduxjs/toolkit/dist/getDefaultEnhancers'
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import  useReducer  from './user/userSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
const rootReducer = combineReducers({user:useReducer})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (buildGetDefaultMiddleware) =>buildGetDefaultMiddleware({
    serializableCheck:false,
  }),
})
export const persistor = persistStore(store);