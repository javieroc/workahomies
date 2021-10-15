import React from 'react';
import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export { Layout };
