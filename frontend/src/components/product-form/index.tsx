import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  CircularProgress,
  Container,
  Grid,
  Typography,
  circularProgressClasses,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { schema_create_product } from '../../models/product.model';

const useStyles = makeStyles((theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const ProductForm: React.FC<any> = ({ createProduct, isLoading }: any) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema_create_product)
  });

  const onSubmit = handleSubmit((data) => createProduct(data));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    id="name"
                    label="Name"
                    autoFocus
                  />
                )}
                name="name"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    autoComplete="price"
                    name="price"
                    variant="outlined"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    error={!!errors.price}
                    helperText={errors?.price?.message}
                    id="price"
                    label="Price"
                    autoFocus
                  />
                )}
                name="price"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="tax"
                    label="Tax"
                    id="tax"
                    autoComplete="tax"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.tax}
                    helperText={errors?.tax?.message}
                    autoFocus
                  />
                )}
                name="tax"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="quantity"
                    label="Quantity in Stock"
                    id="quantity"
                    type="number"
                    autoComplete="quantity"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.quantity}
                    helperText={errors?.quantity?.message}
                    autoFocus
                  />
                )}
                name="quantity"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            onClick={onSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLoading ? (
              <CircularProgress sx={{
                color: '#ffff',
                animationDuration: '550ms',
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
                size={20}
              />
            ) : "Create"}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export { ProductForm };