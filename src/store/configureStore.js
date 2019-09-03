import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './rootReducer';


const persistConfig = {
  key: 'ryles',
  storage,
  whitelist: ['auth'],
  // transforms: [encryptor],
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = compose(applyMiddleware(thunk));
} else {
  enhancer = compose(
    applyMiddleware(thunk, createLogger({ collapsed: true }))
    // reduxDevTools
  );
}

export default preloadedState => {
  const store = createStore(persistedReducer, preloadedState, enhancer);

  let persistor = persistStore(store);
  return { store, persistor };
};
