import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Min Char limit is 4')
    .max(10, 'Max Char Limit is 10')
    .required('Required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  course: Yup.string().required('Select your course category'),
  gender: Yup.string().required('Select your gender '),
});

export default validationSchema;
