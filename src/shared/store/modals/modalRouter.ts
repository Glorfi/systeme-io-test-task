import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal } from '../../constants/types/modal';

const initialState: IModal = {
  name: '',
  payload: null,
};

const openModalAction = (state: IModal, action: PayloadAction<string>) => {
  state.name = action.payload;
  return state;
};
const closeModalsAction = () => {
  return initialState;
};
const setModalPayloadAction = (
  state: IModal,
  action: PayloadAction<Record<string, string>>
) => {
  state.payload = action.payload;
  return state;
};

export const modalRouter = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: openModalAction,
    closeModal: closeModalsAction,
    setModalPayload: setModalPayloadAction,
  },
});

export const { openModal, closeModal, setModalPayload } = modalRouter.actions;
