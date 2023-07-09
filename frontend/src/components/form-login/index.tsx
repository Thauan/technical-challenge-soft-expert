import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    CircularProgress,
    circularProgressClasses,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useForm, Controller } from "react-hook-form"
import { Copyright } from '../copyright';
import { schema_signin } from '../../models/user.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

type FormData = {
    email: string;
    password: string;
    remember?: any;
}

const useStyles: any = makeStyles((theme: any) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: theme.spacing(2)
    },
}));

function FormSignin({ signIn, isLoading }: any) {
    const navigate = useNavigate();
    const classes = useStyles();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema_signin),
        defaultValues: {
            email: "",
            password: "",
            remember: false
        },
    });


    const onSubmit = handleSubmit((data) => signIn(data));

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    helperText={errors?.email?.message}
                                    name="email"
                                    error={!!errors.email}
                                    autoComplete="email"
                                    autoFocus
                                />
                            )}
                            name="email"
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    helperText={errors?.password?.message}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    error={!!errors.password}
                                    autoComplete="current-password"
                                />
                            )}
                            name="password"
                        />

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControlLabel
                                    control={<Checkbox onChange={onChange} onBlur={onBlur} value={value} color="primary" />}
                                    label="Remember me"
                                />
                            )}
                            name="remember"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={onSubmit}
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
                            ) : "Sign In"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => navigate('/signup')} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={12} md={8} className={classes.image} />
        </Grid>
    );
}

export { FormSignin };