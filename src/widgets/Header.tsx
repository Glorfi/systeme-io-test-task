import { Box, HStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { APP_PATHS } from '../shared/constants/AppPaths';
import { routes } from '../app/config/router';
import { useEffect } from 'react';

function Header(): JSX.Element {
  const path = useLocation().pathname;

  return (
    <HStack
      minH={'60px'}
      as={'header'}
      bgColor={'telegram.600'}
      alignItems={'center'}
    >
      <Box w={'800px'} m={'0 auto'} color={'white'}>
        <HStack>
          <ChakraLink
            as={ReactRouterLink}
            to={APP_PATHS.MAIN}
            fontWeight={path === APP_PATHS.MAIN ? 'semibold' : 'regular'}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to={APP_PATHS.PRODUCTS}
            fontWeight={path === APP_PATHS.PRODUCTS ? 'semibold' : 'regular'}
          >
            Products
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to={APP_PATHS.PRICE_PLANS}
            fontWeight={path === APP_PATHS.PRICE_PLANS ? 'semibold' : 'regular'}
          >
            Price Plans
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to={APP_PATHS.PAGES}
            fontWeight={path === APP_PATHS.PAGES ? 'semibold' : 'regular'}
          >
            Pages
          </ChakraLink>
        </HStack>
      </Box>
    </HStack>
  );
}

export default Header;
