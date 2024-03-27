import {
  Box,
  Button,
  ButtonProps,
  Table,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { stringifyAndConvertDates } from '../utils/stringifyAndConvertDates';

interface ITableProps extends TableContainerProps {
  data: Record<string, any>[];
  buttonTitle?: string;
  buttonProps?: ButtonProps;
  buttonAction?: (item: Record<string, any>) => void;
}

export const UniversalTable = (props: ITableProps): JSX.Element => {
  const {
    data: arr,
    buttonTitle,
    buttonAction,
    buttonProps,
    ...tableContainerProps
  } = props;
  const [data, setData] = useState<Record<string, string>[]>(arr);
  const [columns, setColumns] = useState<string[]>();

  useEffect(() => {
    const newArr = arr.map((item) => {
      return stringifyAndConvertDates(item);
    });
    const keys = Object.keys(newArr[0]);
    setData(newArr);
    setColumns(keys);
  }, [arr]);

  return (
    <TableContainer {...tableContainerProps}>
      <Table variant="striped" colorScheme="telegram" size={'sm'}>
        <Thead>
          <Tr>
            {columns &&
              columns.map((item, index) => (
                <Th key={`${item}_${index}`}>{item}</Th>
              ))}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((item, index) => (
              <Tr key={`row_${index}`}>
                {columns &&
                  columns.map((key, keyIndex) => (
                    <Td key={`cell_${keyIndex}`}>{item[key]}</Td>
                  ))}
                {buttonAction && (
                  <Td>
                    <Button
                      onClick={() => buttonAction(arr[index])}
                      {...buttonProps}
                    >
                      {buttonTitle}
                    </Button>
                  </Td>
                )}
                {/* <Td onClick={() => buttonAction && buttonAction(arr[index])}>{button}</Td> */}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
