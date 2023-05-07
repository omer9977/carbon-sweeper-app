import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate  } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignInForm = ({ show, onShowChange }) => {
  const { login, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Email is mandatory'),
    password: Yup.string().required('Password is mandatory'),
  });

  const handleSubmit = (values) => {
    login(values.email, values.password);
    if (accessToken) {
      navigate('/home');
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="custom-textbox">
            <Field
              type="email"
              id="email"
              name="email"
              className="field-input"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="custom-textbox">
            <Field
              type="password"
              id="password"
              name="password"
              className="field-input"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="button-group">
            <button onClick={() => onShowChange(false)} className='cancel-button' type="button">Cancel</button>
            <button className='custom-button login-button' type="submit">Login</button>
          </div>
        </Form>

      </Formik>
    </div>
  );
};

export default SignInForm;
