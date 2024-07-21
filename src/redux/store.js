// src/store/store.js
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

export const store = createStore(rootReducer);
