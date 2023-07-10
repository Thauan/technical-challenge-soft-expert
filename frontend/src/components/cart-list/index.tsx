import React from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../features/cart/cartSlice';
import { FormattedNumber } from 'react-intl';

const CartList: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.cart);
    const openDrawer = useSelector((state: any) => state.cart.openDrawer);

    return (
        <Drawer
            open={openDrawer}
            onClose={() => dispatch(toggleDrawer())}
            anchor='right'
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
                                        Price: <FormattedNumber value={product.price} style={`currency`} currency="USD" />
                                    </Typography>
                                    <Typography color="black">
                                        Tax: <FormattedNumber value={product.tax} style={`currency`} currency="USD" />
                                    </Typography>
                                    <Typography color="black">
                                        Quantity in Stock: {product.quantity}
                                    </Typography>
                                    <Typography variant="h6" color="black">
                                        <FormattedNumber value={product.tax * product.price} style={`currency`} currency="USD" />
                                    </Typography>
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