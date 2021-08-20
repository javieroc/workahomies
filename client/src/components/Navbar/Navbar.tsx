import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Navbar(): JSX.Element {
  return (
    <Flex color="gray.50" height="70px" align="center" padding="0px 16px">
      <Text color="pink.400">Meet Coworkers</Text>
    </Flex>
  );
}

export { Navbar };
