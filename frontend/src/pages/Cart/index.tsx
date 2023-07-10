import React from 'react';
import { ResponsiveAppBar } from '../../components/navbar';
import { CartList } from '../../components/cart-list';

const Cart: React.FC = () => {

  return (
    <>
      <ResponsiveAppBar />
      <CartList />
    </>
  );
}

export { Cart };