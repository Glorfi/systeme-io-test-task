import { Box, HStack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { APP_PATHS } from '../app/constants/AppPaths';
import { routes } from '../app/config/router';

function Header(): JSX.Element {
  return (
    <HStack
      minH={'60px'}
      as={'header'}
      bgColor={'telegram.600'}
      alignItems={'center'}
    >
      <Box w={'800px'} m={'0 auto'} color={'white'}>
        <HStack>
          <ChakraLink as={ReactRouterLink} to={APP_PATHS.MAIN}>
            Home
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to={APP_PATHS.PRODUCTS}>
            Products
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to={APP_PATHS.PRICE_PLANS}>
            Price Plans
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to={APP_PATHS.PAGES}>
            Pages
          </ChakraLink>
        </HStack>
      </Box>
    </HStack>
  );
}

export default Header;
