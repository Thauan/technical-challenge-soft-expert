import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { getProducts } from '../../services/products';
import { useDispatch, useSelector } from 'react-redux';
import { onSuccessProducts } from '../../features/products/productSlice';
import { Box, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../features/cart/cartSlice';

const ProductList: React.FC = () => {
  const products = useSelector((state: any) => state.products.products);
  const dispatch = useDispatch();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    { field: 'tax', headerName: 'Tax', width: 150 },
    {
      field: 'addToCart',
      headerName: 'Adicionar ao carrinho',
      width: 200,
      renderCell: (params: any) => {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <IconButton aria-label="add_to_cart" onClick={() => dispatch(addToCart(params?.row))}>
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        )
      }
    },
  ];

  useQuery("products", getProducts, {
    onSuccess: (response) => {
      console.log(response?.data?.products);
      dispatch(onSuccessProducts(response.data.products));
    }
  });

  return (
    <div style={{ height: '100%', width: '100%', padding: 20 }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 25]}
        checkboxSelection
      />
    </div>
  );
}

export { ProductList };