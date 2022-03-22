import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import HomePage from '../components/Home';
import MainRouter from '../components/MainRouter';
import AppNotFound from '../components/notfound';

const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<MainRouter />} >
      <Route index path="homepage" element={<HomePage />} />
      <Route path="test" element={<div>test</div>} />
      <Route path="" element={<Navigate to="/homepage" />} />
    </Route>
    <Route path="*" element={<AppNotFound />} />
  </Routes>
);

export default RootRoutes;
