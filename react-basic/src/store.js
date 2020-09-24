import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/app';
import authReducer from './reducers/auth'
import sagas from './sagas';

// reducer persist didaftarkan disini
export const reducers = {
  app: appReducer,
  auth: authReducer,
};

export const rootReducer = combineReducers(reducers);

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  whitelist: ['app'],
};

// ini adalah konfigurasi untuk persist menggunakan AsyncStorage agar data tersimpan secara persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const appMiddleware = () => (next) => (action) => {
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(persistedReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
