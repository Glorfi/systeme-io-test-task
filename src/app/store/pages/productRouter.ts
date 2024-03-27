import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../constants/types/product';
import { productListData } from '../../constants/prorductListData';

const initialState: IProduct[] = productListData;

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
  },
});

export const { replaceItemProductList } = productRouter.actions;
