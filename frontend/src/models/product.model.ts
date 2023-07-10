import * as yup from 'yup';

const schema_create_product = yup
    .object()
    .shape({
        name: yup.string().required('Name is required'),
        tax: yup.number().required('Tax is required'),
        price: yup.number().required('Price is required'),
        quantity: yup.number().required('Quantity in Stock is required'),
    })
    .required();

export { schema_create_product }