import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import { EditTitlePopUp } from '../components/EditTitlePopUp';

function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <Header />
      <Box as="main" maxW={'800px'} m={'0 auto'}>
        {children}
      </Box>
    </>
  );
}

export default BaseLayout;
