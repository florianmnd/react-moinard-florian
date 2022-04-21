import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import { UserContext } from "./context/UserContext";
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        {
          user ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          )
        }
      </UserContext.Provider>
    </BrowserRouter >
  );
};

export default App;
