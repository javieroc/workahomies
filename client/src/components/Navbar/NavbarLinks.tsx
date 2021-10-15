import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';

function NavbarLinks(): JSX.Element {
  return (
    <HStack spacing="16px">
      <Heading size="sm" color="orange.500">How It Works</Heading>
      <Heading size="sm" color="orange.500">Experiences</Heading>
      <Heading size="sm" color="orange.500">About Us</Heading>
    </HStack>
  );
}

export { NavbarLinks };
