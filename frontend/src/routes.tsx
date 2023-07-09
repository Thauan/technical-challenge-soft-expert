import React from 'react';
import { Routes as Router, BrowserRouter, Route } from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

const Routes: React.FC = () => {
  const routes = [
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ];

  return (
    <BrowserRouter>
      <Router>
        {routes.map((route, index) => <Route path={route.path} element={route.element} key={index} />)}
      </Router>
    </BrowserRouter>
  );
}

export { Routes };