import { configureStore } from '@reduxjs/toolkit';
import { pageRouter } from './pages/pageRouter';
import { pricingPlanRouter } from './pages/pricingPlanRouter';
import { productRouter } from './pages/productRouter';
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
