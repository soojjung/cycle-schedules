import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import LoadingPage from '../pages/LoadingPage';
import ResultPage from '../pages/ResultPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default Routers;
