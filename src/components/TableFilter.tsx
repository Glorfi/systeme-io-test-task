import { ChevronDownIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FiFilter } from 'react-icons/fi';

import {
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from '@chakra-ui/react';

function TableFilter(): JSX.Element {
  return (
    <HStack mt={'20px'} justifyContent={'flex-end'} w={'100%'}>
      <InputGroup maxW={'200px'} size={'sm'} colorScheme='telegram'>
        <Input />
        <InputRightElement>
          <SearchIcon color={"telegram.600"}/>
        </InputRightElement>
      </InputGroup>
      <IconButton
        aria-label="reset"
        icon={<CloseIcon />}
        size={'xs'}
        variant={'ghost'}
        colorScheme="telegram"
      />
      <Menu placement="bottom-end" size={'sm'}>
        <MenuButton
          as={Button}
          colorScheme="telegram"
          leftIcon={<FiFilter />}
          size={'sm'}
        >
          Filter by
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default TableFilter;
