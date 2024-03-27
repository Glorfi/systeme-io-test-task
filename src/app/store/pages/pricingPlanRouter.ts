import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPricingPlan } from '../../constants/types/pricingPlan';
import { pricingPlanListData } from '../../constants/pricingPlanListData';

const initialState: IPricingPlan[] = pricingPlanListData;

const replacePricingPlanAction = (
  state: IPricingPlan[],
  action: PayloadAction<IPricingPlan>
) => {
  const index = state.findIndex((item) => item.id === action.payload.id);
  if (index !== -1) {
    state[index] = action.payload;
  }
  return state;
};

export const pricingPlanRouter = createSlice({
  name: 'pricingPlanList',
  initialState,
  reducers: {
    replaceItemPricingPlanList: replacePricingPlanAction,
  },
});

export const { replaceItemPricingPlanList } = pricingPlanRouter.actions;
