import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { pagesListData } from '../../constants/pagesListData';
import { IPage } from '../../constants/types/pages';

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

export const pageRouter = createSlice({
  name: 'pageList',
  initialState,
  reducers: {
    replaceItemPageList: replaceItemPageListAction,
  },
});

export const { replaceItemPageList } = pageRouter.actions;
