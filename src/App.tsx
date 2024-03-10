// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Home } from './components/Home';
import { Personnel } from './components/Personnel';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personnel" element={<Personnel />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
};

export default App;
