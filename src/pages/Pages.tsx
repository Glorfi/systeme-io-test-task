import BaseLayout from '../widgets/layouts/BaseLayout';
import { PagesTableFilter } from '../features/PagesFilter';
import { PagesTableWidget } from '../widgets/pages/PagesTableWidget';

export const PagesPage = (): JSX.Element => {
  return (
    <BaseLayout>
      <PagesTableFilter />
      <PagesTableWidget />
    </BaseLayout>
  );
};

export default PagesPage;
