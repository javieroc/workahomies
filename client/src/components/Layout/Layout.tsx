import { Box } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../Footer';
import { Links } from '../Links';
import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Box>
      <Navbar />
      <Box>
        {children}
      </Box>
      <Links />
      <Footer />
    </Box>
  );
}

export { Layout };
