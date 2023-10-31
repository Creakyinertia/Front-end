import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextInput } from '@carbon/react';
import userdetails from './components/userdetails.json';
import { useNavigate } from 'react-router-dom';
import './app.scss'
import { Form } from 'carbon-components-react';
import { Grid,Column } from '@carbon/react';


const LoginPage = () => {
    const navigate= useNavigate();
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      }),

      onSubmit: (values) => {
        console.log(values)
        const user = userdetails.find(user => user.first_name === values.username);
        if (user && user.password === values.password) {
            console.log(user.password)
            console.log(values.password)
          navigate('../');
        } else {
          formik.setFieldError('username', 'Invalid username or password');
        }        
        formik.resetForm();
      },
    });
  
    return (

        <div className='logform'>
        <Grid>
      <Column sm={4} md={6} lg={16} >
      <h2 className='headd'>Login</h2>
        <Form onSubmit={formik.handleSubmit}>
            <TextInput
              type="text"
              id="username"
              name="username"
              helperText="Enter the username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              invalid={Boolean(formik.errors.username&&formik.touched.username)}
              invalidText={formik.errors.username}
              labelText='UserName'
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <TextInput
              type="password"
              id="logpassword"
              name="password"
              helperText="Enter the password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={Boolean(formik.errors.password&&formik.touched.password)}
              invalidText={formik.errors.password}
              value={formik.values.password}
              labelText='Password'
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          <Button type="submit" id="logbut">Login</Button>
        </Form>
   
        </Column>
      </Grid>
      </div>
    );
  };
  
  export default LoginPage;