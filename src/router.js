import React from 'react';
import App from './App';
import Home from './pages/home/home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> }
])