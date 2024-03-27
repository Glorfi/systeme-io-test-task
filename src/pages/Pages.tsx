import BaseLayout from '../layouts/BaseLayout';
import { PagesTableWidget } from '../widgets/PagesTableWidget';

export const PagesPage = (): JSX.Element => {
  return (
    <BaseLayout>
      <PagesTableWidget />
    </BaseLayout>
  );
};

export default PagesPage;
