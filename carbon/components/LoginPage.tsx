import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const LoginPage = () => {
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      }),
      onSubmit: (values, actions) => {
        // Simulate a login process (replace with actual authentication logic)
        if (values.username === 'yourUsername' && values.password === 'yourPassword') {
          // Successful login, perform necessary actions here (e.g., set authentication state)
          alert('Login successful');
        } else {
          // Failed login, handle the error (e.g., display an error message)
          alert('Login failed. Invalid username or password.');
        }
        actions.resetForm();
      },
    });
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;
  
