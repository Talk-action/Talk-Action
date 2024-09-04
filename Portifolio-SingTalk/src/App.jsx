import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styles from './styles/AppStyles.module.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
