import MainPage from '../../pages/Main';
import PagesPage from '../../pages/Pages';
import PricePlanPage from '../../pages/PricePlans';
import ProductPage from '../../pages/Products';
import { APP_PATHS } from '../../shared/constants/AppPaths';

interface IAppRoutes {
  path: string;
  element: () => JSX.Element;
}

export const routes: IAppRoutes[] = [
  { path: APP_PATHS.MAIN, element: MainPage },
  { path: APP_PATHS.PRODUCTS, element: ProductPage },
  { path: APP_PATHS.PRICE_PLANS, element: PricePlanPage },
  { path: APP_PATHS.PAGES, element: PagesPage },
];
