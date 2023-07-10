import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  CircularProgress,
  Checkbox,
  Link,
  Container,
  Box,
  Grid,
  Typography,
  circularProgressClasses,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { schema_signup } from '../../models/user.model';
import { Copyright } from '../copyright';

type FormData = {
  name: string;
  email: string;
  password: string;
  permission_newsletter?: any;
}

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

function FormSignUp({ signUp, isLoading }: any) {
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema_signup),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    signUp(data);
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    id="email"
                    label="E-mail"
                    autoFocus
                  />
                )}
                name="email"
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    autoFocus
                  />
                )}
                name="password"
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
            ) : "Sign Up"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate('/')} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export { FormSignUp };