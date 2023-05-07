import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/signinForm.css';


const SignInForm = ({ show, onShowChange }) => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Email is mandatory'),
    password: Yup.string().required('Password is mandatory'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('Password repetation is mandatory'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            {/* <label className='custom-label' htmlFor="email">Email</label> */}
            <Field type="email" id="email" name="email" className="field-input" placeholder="Email" />
            <div className='error-message'>
              <ErrorMessage className='custom-label' name="email" component="div" />
            </div>
          </div>
          <div>
            {/* <label className='custom-label' htmlFor="password">Şifre</label> */}
            <Field type="password" id="password" name="password" className="field-input" placeholder="Password" />
            <div className='error-message'>
              <ErrorMessage className='custom-label' name="password" component="div" />
            </div>
          </div>
          <div>
            {/* <label className='custom-label' htmlFor="password">Şifre</label> */}
            <Field type="password" id="confirmPassword" name="confirmPassword" className="field-input" placeholder="Confirm password" />
            <div className='error-message'>
              <ErrorMessage className='custom-label' name="confirmPassword" component="div" />
            </div>
          </div>
          <div className="button-group">
            <button onClick={() => onShowChange(false)} className='cancel-button' type="button">Cancel</button>
            <button className='custom-button login-button' type="submit">Sign Up</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
