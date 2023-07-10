import React from 'react';
import { ProductList } from '../../components/product-list';
import { ResponsiveAppBar } from '../../components/navbar';
import { CartList } from '../../components/cart-list';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ p: 2, pt: 4 }}>
        <Button variant="contained" onClick={() => navigate('/products/create', { replace: true })}>
          Create Product
        </Button>
      </Box>
      <ProductList />
      <CartList />
    </>
  );
}

export { Dashboard };