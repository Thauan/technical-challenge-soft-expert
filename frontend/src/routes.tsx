import React from 'react';
import { Routes as Router, BrowserRouter, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { ProductCreate } from './pages/ProductCreate';
import { ProtectedRoute } from './utils/protected-route';

const Routes: React.FC = () => {
  const isLogged = useSelector((state: any) => state.user.logged);

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
    },
    {
      path: '/products/create',
      element: <ProductCreate />,
      protected: true,
    }
  ];

  return (
    <BrowserRouter>
      <Router>
        {routes.map((route, index) => <Route path={route.path} element={
          route.protected ? <ProtectedRoute isLogged={isLogged}>{route.element}</ProtectedRoute> : route.element
        } key={index} />)}
      </Router>
    </BrowserRouter>
  );
}

export { Routes };