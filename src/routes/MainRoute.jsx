import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Series } from '../pages/Series';
import { Movies } from '../pages/Movies';
import { Welcome } from '../pages/Welcome';
import { ErrorPage } from '../pages/ErrorPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const MainRoute = () => {
  
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}