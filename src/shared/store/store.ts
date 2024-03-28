import { configureStore } from '@reduxjs/toolkit';
import { pageRouter } from '../../entities/page/pageRouter';
import { pricingPlanRouter } from '../../entities/price-plan/pricingPlanRouter';
import { productRouter } from '../../entities/product/productRouter';
import { modalRouter } from './modals/modalRouter';

export const store = configureStore({
  reducer: {
    [pageRouter.name]: pageRouter.reducer,
    [pricingPlanRouter.name]: pricingPlanRouter.reducer,
    [productRouter.name]: productRouter.reducer,
    [modalRouter.name]: modalRouter.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
