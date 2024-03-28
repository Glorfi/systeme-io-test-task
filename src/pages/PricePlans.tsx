import BaseLayout from '../widgets/layouts/BaseLayout';
import { PricePlanFilter } from '../features/PricePlanFilter';
import PricePlanTableWidget from '../widgets/price-plan/PricePlanTableWidget';

function PricePlanPage() {
  return (
    <BaseLayout>
      <PricePlanFilter />
      <PricePlanTableWidget />
    </BaseLayout>
  );
}

export default PricePlanPage;
