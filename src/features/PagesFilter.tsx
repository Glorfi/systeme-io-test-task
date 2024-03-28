import { Box } from '@chakra-ui/react';
import { useAppSelector } from '../shared/utils/hooks';
import { filterPageList, resetPageList } from '../entities/page/pageRouter';
import TableFilter from '../shared/ui/TableFilter';

export const PagesTableFilter = (): JSX.Element => {
  const pageList = useAppSelector((state) => state.pageList);

  return (
    <Box mt={'20px'} w={'100%'}>
      <TableFilter
        data={pageList}
        onFilter={filterPageList}
        onReset={resetPageList}
        ml={'auto'}
      />
    </Box>
  );
};
