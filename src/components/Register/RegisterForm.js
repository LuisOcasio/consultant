import React from 'react';
import { Form, Field } from 'formik';
import Icon2 from '../../images/icon2.png';

const RegisterForm = ({ errors, touched, isSubmitting }) => (
  <div className='register-background'>
    <Form>
      <div className='register'>
        {touched.login && errors.login && <p>{errors.login}</p>}
        <Field type='login' name='login' placeholder='Login' />

        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <button type='submit' disabled={isSubmitting}>
        <img src={Icon2} alt='cannabis-plant' />
      </button>
    </Form>
  </div>
);

export default RegisterForm;
