import React, { usestate } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';
import About from './pages/About';
import Products from './pages/Products';
import Tools from './pages/Tools';

const App = () => {

  return (
    <div>
      <Navbar title='Muhammad Sami' />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  )
}

export default App
