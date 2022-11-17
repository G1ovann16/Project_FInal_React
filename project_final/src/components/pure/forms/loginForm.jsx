import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
);

const Loginform = () => {
    
    const initialCredentials = {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
    }
    const navigate = useNavigate()

    const register = () =>{
        navigate('/register')
          }
    // const history = useHistory();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    if(localStorage.getItem("email")=== null || localStorage.getItem("password")=== null){
                        await alert('You should register before')
                        navigate('/register');
                    }else if(localStorage.getItem("email") === values.email && localStorage.getItem("password") === values.password){
                        // alert(JSON.stringify(values, null, 2));
                        // await localStorage.setItem('credentials', values);
                        localStorage.setItem('log', true)
                        navigate('/');}else{
                            await alert('Login wrong, Try again or register pls')
                    }
                }}
            >
                {/* We obtain props from Formik */}
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                )}
            </Formik>
               
        <Button variant="contained" onClick={register}>Register</Button>
        </div>
    );
}

export default Loginform;
