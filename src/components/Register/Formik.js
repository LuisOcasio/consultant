import RegisterForm from './RegisterForm';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const Formik = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, '')
      .required('')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(RegisterForm);

export default Formik;
