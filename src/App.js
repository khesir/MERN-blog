import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
