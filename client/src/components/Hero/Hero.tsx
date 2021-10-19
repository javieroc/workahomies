import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeroImage from 'src/assets/hero.jpeg';
import { Search } from './Search';

function Hero(): JSX.Element {
  return (
    <Flex
      backgroundImage={`url(${HeroImage})`}
      width="100%"
      height="400px"
      backgroundSize="cover"
      backgroundPosition="bottom"
      position="relative"
    >
      <Search />
    </Flex>
  );
}

export { Hero };
