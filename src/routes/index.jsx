import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ListPage from '../pages/ListPage';
import LoadingPage from '../pages/LoadingPage';
import ResultPage from '../pages/ResultPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default Routers;
