import * as Yup from 'yup'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^(?!\s)\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
const firstnameRegex = /^[A-Z][a-zA-Z]*(?:\s[A-Z][a-zA-Z]*)*\s*$/;
const lastnameRegex = /^[A-Z][a-zA-Z]*\s*$/;

export const signupSchema = Yup.object({
    firstName:Yup.string().matches(firstnameRegex, 'First letter shoud be capital').min(2,'First Name must be atleast 2 characters long').max(25,'First Name cannot be more than 25 characters').required('*Required'),
    lastName:Yup.string().matches(lastnameRegex, 'Last name should be of one word with first letter capital').min(2,'Last Name must be atleast 2 characters long').max(25,'Last Name cannot be more than 25 characters').required('*Required'),
    address:Yup.string().min(10,'Address must be atleast 10 characters long').required('This field is required'),
    email: Yup.string().matches(emailRegex,'Invalid email id').max(64,'Email cannot be more than 64 characters').email('Invalid email address').required('*Required'),
    pass1:Yup.string().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@, $, !, %, *, ?, &), and be a minimum of 8 characters long.').required('*Required'),
    pass2: Yup.string().required('*Required').oneOf([Yup.ref('pass1'),null],'Password must match'),
    profileImg: Yup.mixed().required('Please upload an image'),
})

export const loginSchema = Yup.object({
    email: Yup.string().matches(emailRegex,'Invalid email id').max(64,'Email cannot be more than 64 characters').email('Invalid email address').required('*Required'),
    pass1:Yup.string().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@, $, !, %, *, ?, &), and be a minimum of 8 characters long.').required('*Required'),
})