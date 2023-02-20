import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './HeaderComponent/Header';
import Breweries from './BodyComponent/Breweries';
import Showbrewery from './BodyComponent/Showbrewery';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Error } from './Error';
import { useState } from 'react';

const AppLayout = () => {
  const [modeColor, setModeColor] = useState('Light Mode');

  // handle click on Light/Dark mode button to switch it
  function handleChange(modeColor) {
    setModeColor(modeColor === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
  }

  return (
    <BrowserRouter>
      <div>
        <Header modeColor={modeColor} onChange={handleChange} />
        <Routes>
          <Route path="/" element={<Breweries modeColor={modeColor} />} />
          <Route path="/brewery/:id" element={<Showbrewery modeColor={modeColor} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
