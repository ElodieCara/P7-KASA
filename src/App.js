import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ErrorPage from './pages/Error404';
import Home from './pages/Home';
import ProductSheet from './pages/ProductSheet';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<ProductSheet />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter >
    );
};

export default App;