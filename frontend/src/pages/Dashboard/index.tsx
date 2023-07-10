import React from 'react';
import { ProductList } from '../../components/product-list';
import { ResponsiveAppBar } from '../../components/navbar';

const Dashboard: React.FC = () => {

  return (
    <>
      <ResponsiveAppBar />
      <ProductList />
    </>
  );
}

export { Dashboard };