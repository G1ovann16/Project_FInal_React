import React, { useState } from "react";
import { User } from "../../../models/users.class";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { ROLES } from "../../../models/roles.enum";

const RegisterForm = (props) => {
  let user = new User();
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "username too short")
      .max(12, "username too long")
      .required("username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    //   role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN],'You must select a Role: User/Admin')
    // .required('Role is requiered'),
    password: Yup.string()
      .min(8, "password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "password must match"),
      })
      .required("you must confirm the password"),
  });

  const submit = (values) => {
    alert("Registered User");
  };

  return (
    <div>
      <h4>Register form</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          await localStorage.setItem('password', values.password);
            await localStorage.setItem('email', values.email);
            navigate(('/login'))
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Your username"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <label htmlFor="confirm">Confirm</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm your passsword"
              type="password"
            />
            {/* Password Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}
            <button type="submit">Register</button>
            {isSubmitting ? 
            <p>Sending your credentials ...</p> 
            : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
