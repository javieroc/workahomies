import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

function NavbarButtons() {
  return (
    <HStack>
      <Button colorScheme="purple" size="sm" borderRadius="50px">Sign up</Button>
      <Button colorScheme="purple" variant="outline" size="sm" borderRadius="50px">Sign in</Button>
    </HStack>
  );
}

export { NavbarButtons };
