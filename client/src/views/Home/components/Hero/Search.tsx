import React from 'react';
import {
  Button,
  Heading, Input, InputGroup, InputRightElement, VStack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Search(): JSX.Element {
  return (
    <VStack
      width="400px"
      alignItems="flex-start"
      spacing="16px"
      position="absolute"
      top="80px"
      left="200px"
    >
      <Heading size="lg" color="gray.800">Looking for a partner?</Heading>
      <InputGroup size="lg">
        <Input
          placeholder="Where are you going?"
          backgroundColor="white"
          borderColor="gray.400"
          borderRadius="25px"
          size="lg"
        />
        <InputRightElement right="8px">
          <Button colorScheme="pink" borderRadius="50%" width="40px" height="40px">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}

export { Search };
