import { SET_STOCK, SET_DATA } from '../actionTypes';
import { stockData } from '../../data/stocks';

export const setStock = (stock) => ({
  type: SET_STOCK,
  payload: stock,
});

export const setData = () => ({
  type: SET_DATA,
  payload: stockData,
});
