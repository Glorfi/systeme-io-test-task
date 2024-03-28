import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { pagesListData } from '../../shared/constants/pagesListData';
import { IPage } from '../../shared/constants/types/pages';

const initialState: IPage[] = pagesListData;

const replaceItemPageListAction = (
  state: IPage[],
  action: PayloadAction<IPage>
) => {
  const index = state.findIndex((item) => item.id === action.payload.id);
  if (index !== -1) {
    state[index] = action.payload;
  }
  return state;
};

const filterAction = (
  state: IPage[],
  action: PayloadAction<{ key: string; value: string }>
) => {
  const filteredArr = state.filter((item) => {
    if (typeof item[action.payload.key] === 'string') {
      return String(item[action.payload.key]).includes(action.payload.value);
    }
  });
  return filteredArr;
};

const resetAction = (state: IPage[], action: PayloadAction<IPage[]>) => {
  return state = action.payload
};

export const pageRouter = createSlice({
  name: 'pageList',
  initialState,
  reducers: {
    replaceItemPageList: replaceItemPageListAction,
    filterPageList: filterAction,
    resetPageList: resetAction,
  },
});

export const { replaceItemPageList, filterPageList, resetPageList } =
  pageRouter.actions;
