import React from 'react';
import { Routes as Router, BrowserRouter, Route } from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './utils/protected-route';

const Routes: React.FC = () => {
  const routes = [
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      protected: true,
    }
  ];

  return (
    <BrowserRouter>
      <Router>
        {routes.map((route, index) => <Route path={route.path} element={
          route.protected ? <ProtectedRoute isLogged={true}>{route.element}</ProtectedRoute> : route.element
        } key={index} />)}
      </Router>
    </BrowserRouter>
  );
}

export { Routes };