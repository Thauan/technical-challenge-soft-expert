import * as yup from 'yup';

const schema_signin = yup
    .object()
    .shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

const schema_signup = yup
    .object()
    .shape({
        name: yup.string().required(),
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

export { schema_signin, schema_signup }