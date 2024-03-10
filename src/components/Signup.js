import React from 'react';
import InputBox from './InputBox';
import { Container } from "@mui/material";
import PageButton from './PageButton';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';

const Signup = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    pass1: '',
    pass2: '',
    profileImg: null
  };

  const navigate = useNavigate()

  const {values, errors, handleBlur, handleChange,touched, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
      navigate('/Login', {replace: true})
    }
  });

  return (
    <div>
      <Container >
        <form action="" onSubmit={handleSubmit} style={{ backgroundColor: '#b39ddb', padding: '10px 20px 10px 20px', margin: '10px 100px 10px 100px' }}>
          <h1 style={{ color: '#512da8', }}>Sign Up</h1>
          <div>
            <InputBox name={'firstName'} label={'First Name'} id={'firstname'} type={'text'} value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
            {errors.firstName && touched.firstName ? (<p style={{color: 'red'}}>{errors.firstName}</p>) : null}

            <InputBox name={'lastName'} label={'Last Name'} id={'lastname'} type={'text'} value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
            {errors.lastName && touched.lastName ? (<p style={{color: 'red'}}>{errors.lastName}</p>) : null}

            <InputBox name={'email'} label={'Email'} id={'emailid'} type={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? (<p style={{color: 'red'}}>{errors.email}</p>) : null}

            <InputBox name={'address'} label={'Address'} id={'address'} type={'text'} value={values.address} onChange={handleChange} onBlur={handleBlur} />
            {errors.address && touched.address ? (<p style={{color: 'red'}}>{errors.address}</p>) : null}

            <InputBox name={'pass1'} label={'Password'} id={'password'} type={'password'} value={values.pass1} onChange={handleChange} onBlur={handleBlur} />
            {errors.pass1 && touched.pass1 ? (<p style={{color: 'red'}}>{errors.pass1}</p>) : null}

            <InputBox name={'pass2'} label={'Confirm Password'} id={'confirmpassword'} type={'password'} value={values.pass2} onChange={handleChange} onBlur={handleBlur} />
            {errors.pass2 && touched.pass2 ? (<p style={{color: 'red'}}>{errors.pass2}</p>) : null}

            <InputBox name={'profileImg'} label={''} id={'profile-img'} type={'file'} value={values.profileImg} onChange={handleChange} onBlur={handleBlur} />
            {errors.profileImg && touched.profileImg ? (<p style={{color: 'red'}}>{errors.profileImg}</p>) : null}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <PageButton name={'Sign Up'} />
              <div>Account already exists?<Link to={'/Login'}> Login here</Link></div>

            </div>
          </div>
        </form>

      </Container>
    </div>
  );
}

export default Signup;
