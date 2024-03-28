import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Select,
  StackProps,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getStringKeys } from '../utils/getStringKeys';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { UnknownAction } from '@reduxjs/toolkit';

interface ITableFilter extends StackProps {
  data: Record<string, any>[];
  onFilter: (item: any) => UnknownAction;
  onReset: (item: any) => UnknownAction;
}

const TableFilter = (props: ITableFilter): JSX.Element => {
  const { data, onFilter, onReset, ...stackProps } = props;
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [intialData, setInitialData] = useState<Record<string, any>[]>(data);
  const [keys, setKeys] = useState<string[]>();

  const modalOpen = useAppSelector((state) => state.modals.name);

  const [formValues, setFormValues] = useState<Record<string, any>>({
    key: '',
    value: '',
  });
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();

  function handleSelectChange(e: any) {
    setFormValues({ ...formValues, key: e.target.value });
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleReset() {
    setFormValues({ key: '', value: '' });
    if (selectRef.current) {
      selectRef.current.value = '';
    }
    dispatch(onReset(intialData));
  }

  useEffect(() => {
    if (formValues.value.length !== 0 && formValues.key) {
      setIsFilterActive(true);
    }
  }, [formValues]);

  useEffect(() => {
    if (formValues.value.length === 0) {
      dispatch(onReset(intialData));
      setIsFilterActive(false);
    }
  }, [formValues.value]);

  useEffect(() => {
    if (data && selectRef.current) {
      setKeys(getStringKeys(data[0]));
      setFormValues({ key: '', value: '' });
      selectRef.current.value = '';
    }
  }, [selectRef.current]);

  useEffect(() => {
    !isFilterActive ? setInitialData(data) : setIsFilterActive(false);
  }, [data]);

  useEffect(() => {
    if (isFilterActive) {
      dispatch(onFilter(formValues));
    }
  }, [isFilterActive]);

  useEffect(() => {
    modalOpen ? handleReset() : null;
  }, [modalOpen]);

  useEffect(() => {
    return () => handleReset();
  }, []);

  return (
    <HStack
      justifyContent={'flex-end'}
      w={'max-content'}
      bgColor={'telegram.100'}
      p={'8px'}
      {...stackProps}
    >
      <InputGroup
        maxW={'200px'}
        size={'sm'}
        colorScheme="telegram"
        bg={'white'}
      >
        <Input
          name="value"
          type="text"
          value={formValues.value}
          onChange={handleInputChange}
        />
        <InputRightElement>
          <SearchIcon color={'telegram.600'} />
        </InputRightElement>
      </InputGroup>
      <Text whiteSpace={'nowrap'}>Filter by</Text>

      <Select
        ref={selectRef}
        maxW={'150px'}
        size={'sm'}
        defaultValue={''}
        colorScheme="telegram"
        onChange={handleSelectChange}
        bg={'white'}
      >
        {keys &&
          keys.map((key, index) => (
            <option value={key} key={`option${index}`}>
              {key}
            </option>
          ))}
      </Select>
      <IconButton
        aria-label="reset"
        icon={<CloseIcon />}
        size={'xs'}
        variant={'ghost'}
        colorScheme="telegram"
        onClick={handleReset}
      />
    </HStack>
  );
};

export default TableFilter;
