import { Box, Drawer, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../features/cart/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartList: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.cart);
    const openDrawer = useSelector((state: any) => state.cart.openDrawer);

    console.log(cart);
    return (
        <Drawer
            open={openDrawer}
            onClose={() => dispatch(toggleDrawer())}
            anchor='right'
            onBackdropClick={() => dispatch(toggleDrawer())}
            PaperProps={{
                sx: {
                    width: 500,
                    background: 'white',
                    borderRadius: 0
                }
            }}
        >
            <Box
                sx={{ p: 4 }}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >
                <Box
                    sx={{ width: '100%', marginBottom: 4 }}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    alignItems="center"
                >
                    <Typography variant='h4' color="black">
                        Your Cart
                    </Typography>
                    <span onClick={() => dispatch(toggleDrawer())}>
                        Close
                    </span>
                </Box>
                {cart.length ? (
                    <>
                        {cart.map((product: any) => {
                            return (
                                <Box sx={{ width: '100%', paddingTop: 1, paddingBottom: 1 }}>
                                    <Typography color="black">
                                        Name: {product.name}
                                    </Typography>
                                    <Typography color="black">
                                        Price: {product.price}
                                    </Typography>
                                    <Typography color="black">
                                        Quantity: {product.quantity}
                                    </Typography>
                                    <Typography color="black">
                                        Tax: {product.tax}
                                    </Typography>
                                    <AddIcon />
                                    <RemoveIcon />
                                </Box>
                            )
                        })}
                    </>
                ) : (
                    <Box sx={{ width: '100%', paddingTop: 5 }}>
                        <Typography color="black">
                            Has not products
                        </Typography>
                    </Box>
                )}
            </Box>
        </Drawer>
    );
}

export { CartList };