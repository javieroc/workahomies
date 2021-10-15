import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import LogoSVG from 'src/assets/logo.svg?component';
import { NavbarLinks } from './NavbarLinks';
import { NavbarButtons } from './NavbarButtons';
import { Divider } from './Divider';

function Navbar(): JSX.Element {
  return (
    <Flex direction="column">
      <Flex
        color="gray.50"
        height="80px"
        align="center"
        justify="space-between"
        padding="0px 32px"
      >
        <LogoSVG />
        <HStack>
          <NavbarLinks />
          <NavbarButtons />
        </HStack>
      </Flex>
      <Divider />
    </Flex>
  );
}

export { Navbar };
