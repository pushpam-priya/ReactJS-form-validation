import React from "react";
import InputBox from "./InputBox";
import PageButton from "./PageButton";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { loginSchema, signupSchema } from "../schemas";

const Login = () => {

  const initialValues = {
    email: '',
    pass1: '',
  };

  const {values, errors, handleBlur, handleChange,touched, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    }
  });


  return (
    <div>
      <Container>
        <form action="" onSubmit={handleSubmit} style={{ backgroundColor: '#b39ddb', padding: '10px 20px 10px 20px', margin: '10px 80px', }}>
          <h1 style={{ color: '#512da8', }} >Log In</h1>
          <div>
            <InputBox name={'email'} label={'Email'} id={'emailid'} type={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? (<p style={{ color: 'red' }}>{errors.email}</p>) : null}
            <InputBox name={'pass1'} label={'Password'} id={'password'} type={'password'} value={values.pass1} onChange={handleChange} onBlur={handleBlur} />
            {errors.pass1 && touched.pass1 ? (<p style={{ color: 'red' }}>{errors.pass1}</p>) : null}
            <div>
              <PageButton name={'Log In'} />
              <div>Account does not exists?<Link to={'/'}> Signup here</Link></div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;