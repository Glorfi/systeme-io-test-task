import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../shared/constants/types/product';
import { productListData } from '../../shared/constants/prorductListData';

const initialState: IProduct[] = productListData;

const filterAction = (
  state: IProduct[],
  action: PayloadAction<{ key: string; value: string }>
) => {
  const filteredArr = state.filter((item) => {
    if (typeof item[action.payload.key] === 'string') {
      return String(item[action.payload.key]).includes(action.payload.value);
    }
  });
  return filteredArr;
};

const resetAction = (state: IProduct[], action: PayloadAction<IProduct[]>) => {
  return (state = action.payload);
};

const replaceProductAction = (
  state: IProduct[],
  action: PayloadAction<IProduct>
) => {
  const index = state.findIndex((item) => item.id === action.payload.id);
  if (index !== -1) {
    state[index] = action.payload;
  }
  return state;
};

export const productRouter = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    replaceItemProductList: replaceProductAction,
    filterProductList: filterAction,
    resetProductList: resetAction,
  },
});

export const { replaceItemProductList, filterProductList, resetProductList } = productRouter.actions;
