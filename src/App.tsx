import React, { StrictMode } from 'react';
import './App.css';
import Home from './containers/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from './containers/Comments/Comments';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/home",
      Component: Home,
    },
    {
      path: "/comments/:commentId",
      Component: Comments,
    },
  ]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;