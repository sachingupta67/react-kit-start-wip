import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()

    .email('Please provide a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Please provide a valid password')
    .required('Password is required'),
});

export default validationSchema;
