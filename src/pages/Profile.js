import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../css/profile.css';

const Profile = () => {
  // Initial user data
  const initialUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
  };

  // Form validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  // Formik form submission handler
  const handleSubmit = async (values) => {
    try {
      // Submit the updated user data to the server
      const response = await axios.put('/api/user', values);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Initialize Formik form
  const formik = useFormik({
    initialValues: initialUser,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder='First Name'
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error-message">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error-message">{formik.errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="error-message">{formik.errors.address}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
