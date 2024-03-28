import { Box } from '@chakra-ui/react';
import { useAppSelector } from '../shared/utils/hooks';
import TableFilter from '../shared/ui/TableFilter';
import {
  filterPricingPlanList,
  resetPricingPlanList,
} from '../entities/price-plan/pricingPlanRouter';

export const PricePlanFilter = (): JSX.Element => {
  const pricingPlanList = useAppSelector((state) => state.pricingPlanList);

  return (
    <Box mt={'20px'} w={'100%'}>
      <TableFilter
        data={pricingPlanList}
        onFilter={filterPricingPlanList}
        onReset={resetPricingPlanList}
        ml={'auto'}
      />
    </Box>
  );
};
