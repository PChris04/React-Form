import React from 'react';
import { useFormik } from 'formik';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      passwordMatch: '',
      email: '',
      acceptedTerms: false,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 characters or more';
      }
      if (!values.passwordMatch) {
        errors.passwordMatch = 'Required';
      } else if (values.password !== values.passwordMatch) {
        errors.passwordMatch = 'Passwords do not match';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.acceptedTerms) {
        errors.acceptedTerms = 'You must accept the terms and conditions';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>

      <div>
        <label htmlFor="passwordMatch">Password Match:</label>
        <input
          id="passwordMatch"
          name="passwordMatch"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordMatch}
        />
        {formik.errors.passwordMatch ? <div>{formik.errors.passwordMatch}</div> : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="acceptedTerms"
            onChange={formik.handleChange}
            checked={formik.values.acceptedTerms}
          />
          Accept Terms and Conditions
        </label>
        {formik.errors.acceptedTerms ? <div>{formik.errors.acceptedTerms}</div> : null}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
