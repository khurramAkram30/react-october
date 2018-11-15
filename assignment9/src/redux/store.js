import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootreducers from './rootreducers';
// redux persiist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// persistedReducer local storage sey sync hua wa reducer hai


const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootreducers)

  const store=createStore(persistedReducer,applyMiddleware(thunk))
  const persistor = persistStore(store)

//   export default () => {
//     let store = createStore(persistedReducer)
   
//     return { store, persistor }
//   }
  export {
      store,
      persistor
  }