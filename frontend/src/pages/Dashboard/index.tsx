import React from 'react';
import { ProductList } from '../../components/product-list';
import { ResponsiveAppBar } from '../../components/navbar';
import { CartList } from '../../components/cart-list';

const Dashboard: React.FC = () => {

  return (
    <>
      <ResponsiveAppBar />
      <ProductList />
      <CartList />
    </>
  );
}

export { Dashboard };