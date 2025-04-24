
import React from 'react';
import KentoLandingPage from './KentoLandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KentoLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
