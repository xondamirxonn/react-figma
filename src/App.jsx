import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
  
}

export default App
