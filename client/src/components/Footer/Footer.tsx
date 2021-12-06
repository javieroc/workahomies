import React from 'react';
import {
  Flex, Heading, Icon,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

function Footer(): JSX.Element {
  return (
    <Flex
      padding="20px"
      backgroundColor="purple.800"
      justifyContent="flex-end"
      color="white"
    >
      <Heading size="md" marginRight="16px">Dev by Dev&Coffee</Heading>
      <Icon as={BsGithub} boxSize="24px" />
    </Flex>
  );
}

export { Footer };
