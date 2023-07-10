import React, { useState } from 'react';
import { ResponsiveAppBar } from '../../components/navbar';
import { ProductForm } from '../../components/product-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/products';
import { Alert, Snackbar } from '@mui/material';
import { onUpdateListProducts } from '../../features/products/productSlice';

const ProductCreate: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [typeSnackBar, setTypeSnackBar] = useState<any>("success");
  const [messageSnackBar, setMessageSnackBar] = useState<any>("");
  const [isLoading, setLoading] = useState(false);

  const create = async (product: any) => {
    try {
      setLoading(true);
      const response = await createProduct(product);
      dispatch(onUpdateListProducts(response?.data))

      setOpen(true)
      setTypeSnackBar("success");
      setMessageSnackBar("Product has been created!");

      navigate('/dashboard');
    } catch (error: any) {
      setOpen(true)
      setTypeSnackBar("error");
      setMessageSnackBar(error?.response?.data?.message);
    }

    setLoading(false);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ResponsiveAppBar />
      <ProductForm createProduct={create} isLoading={isLoading} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={typeSnackBar} sx={{ width: '100%' }}>
          {messageSnackBar}
        </Alert>
      </Snackbar>
    </>
  );
}

export { ProductCreate };