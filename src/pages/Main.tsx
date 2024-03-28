import { Text, VStack } from '@chakra-ui/react';
import BaseLayout from '../widgets/layouts/BaseLayout';

function MainPage() {
  return (
    <BaseLayout>
      <VStack minH={"calc(100vh - 60px)"} justifyContent={"center"}>
        <Text>Get to other pages to see the task!</Text>
      </VStack>
    </BaseLayout>
  );
}

export default MainPage;
