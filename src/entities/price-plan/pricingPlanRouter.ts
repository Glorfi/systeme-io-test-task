import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPricingPlan } from '../../shared/constants/types/pricingPlan';
import { pricingPlanListData } from '../../shared/constants/pricingPlanListData';

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

const filterAction = (
  state: IPricingPlan[],
  action: PayloadAction<{ key: string; value: string }>
) => {
  const filteredArr = state.filter((item) => {
    if (typeof item[action.payload.key] === 'string') {
      return String(item[action.payload.key]).includes(action.payload.value);
    }
  });
  return filteredArr;
};

const resetAction = (
  state: IPricingPlan[],
  action: PayloadAction<IPricingPlan[]>
) => {
  return (state = action.payload);
};

export const pricingPlanRouter = createSlice({
  name: 'pricingPlanList',
  initialState,
  reducers: {
    replaceItemPricingPlanList: replacePricingPlanAction,
    filterPricingPlanList: filterAction,
    resetPricingPlanList: resetAction,
  },
});

export const {
  replaceItemPricingPlanList,
  filterPricingPlanList,
  resetPricingPlanList,
} = pricingPlanRouter.actions;
