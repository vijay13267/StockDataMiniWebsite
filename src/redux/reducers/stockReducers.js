import { SET_STOCK, SET_DATA } from '../actionTypes';
import { stockData } from '../../data/stocks';

const initialState = {
  stock: 'AAPL',
  data: stockData,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCK:
      return {
        ...state,
        stock: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
