import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
}

export { Layout };
