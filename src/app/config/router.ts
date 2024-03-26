import MainPage from '../../pages/Main';
import PagesPage from '../../pages/Pages';
import PricePlanPage from '../../pages/PricePlans';
import ProductPage from '../../pages/Products';

interface IAppRoutes {
  route: string;
  element: () => JSX.Element;
}

const routes: IAppRoutes[] = [
  { route: APP_PATHS.MAIN, element: MainPage },
  { route: APP_PATHS.PRODUCTS, element: ProductPage },
  { route: APP_PATHS.PRICE_PLANS, element: PricePlanPage },
  { route: APP_PATHS.PAGES, element: PagesPage },
];
