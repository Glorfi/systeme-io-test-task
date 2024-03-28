import BaseLayout from '../widgets/layouts/BaseLayout';
import { ProductFilterWidget } from '../features/ProductFilterFilter';

import ProductTableWidget from '../widgets/product/ProductTableWidget';

function ProductPage() {
  return (
    <BaseLayout>
      <ProductFilterWidget />
      <ProductTableWidget />
    </BaseLayout>
  );
}

export default ProductPage;
