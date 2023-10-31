import React from 'react';
import {TextInput,Button} from "@carbon/react"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const LoginForm: React.FC = () => {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, actions) => {
         if (values.username === 'yourUsername' && values.password === 'yourPassword') {
           alert('Login successful');
          } else {
            alert('Login failed. Invalid username or password.');
          }
          actions.resetForm();
        }}
      >
        <Form>
          <div className='username'>
            <TextInput id="username" name="username" labelText="USERNAME" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div className='password'>
            <TextInput type="password" id="password" name="password" labelText='Password'/>
            <ErrorMessage name="password" component="div" />
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
