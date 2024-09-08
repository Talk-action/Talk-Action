import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styles from './styles/AppStyles.module.css';
import Content from './pages/ContentPrototipo';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/content" element={<Content/>} />

        </Routes>
    </div>
  );
};

export default App;
