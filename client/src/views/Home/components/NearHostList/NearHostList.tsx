import React from 'react';
import {
  Button, Flex, Heading, VStack,
} from '@chakra-ui/react';
import { Host } from 'src/types';
import { NearHostCard } from '../NearHostCard';

interface Props {
  hosts: Host[]
}

function NearHostList({ hosts }: Props): JSX.Element {
  return (
    <VStack margin="64px auto" width="1306px">
      <Flex justifyContent="space-between" alignItems="center" width="100%" marginBottom="16px">
        <Heading size="lg">Near Hosts</Heading>
        <Button variant="link" color="orange.500">See All</Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap="16px">
        {hosts.map((host) => <NearHostCard key={host.name} host={host} />)}
      </Flex>
    </VStack>
  );
}

export { NearHostList };
