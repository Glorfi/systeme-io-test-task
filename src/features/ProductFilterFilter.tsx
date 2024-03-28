import { Box } from '@chakra-ui/react';
import { useAppSelector } from '../shared/utils/hooks';
import TableFilter from '../shared/ui/TableFilter';
import {
  filterProductList,
  resetProductList,
} from '../entities/product/productRouter';

export const ProductFilterWidget = (): JSX.Element => {
  const productList = useAppSelector((state) => state.productList);

  return (
    <Box mt={'20px'} w={'100%'}>
      <TableFilter
        data={productList}
        onFilter={filterProductList}
        onReset={resetProductList}
        ml={'auto'}
      />
    </Box>
  );
};
