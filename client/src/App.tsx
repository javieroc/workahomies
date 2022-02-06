import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <p>Not found</p>
            </main>
)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
