import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/signinForm.css';


const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Geçerli bir email adresi girin').required('Email zorunlu'),
    password: Yup.string().required('Şifre zorunlu'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
      .required('Şifre tekrarı zorunlu'),
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
            <Field type="email" id="email" name="email" classname="field-input" placeholder="Email"/>
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            {/* <label className='custom-label' htmlFor="password">Şifre</label> */}
            <Field type="password" id="password" name="password" classname="field-input" placeholder="Password"/>
            <ErrorMessage name="password" component="div" />
          </div>
          <button className='custom-button' type="submit">Giriş Yap</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
