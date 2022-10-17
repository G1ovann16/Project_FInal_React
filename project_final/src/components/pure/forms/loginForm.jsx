import React, { useState } from "react";
import PropTypes from "prop-types";

const LoginForm = (props) => {
  const initialCredentials = [
    {
      user: "",
      pass: ""
    },
  ];
  const [credentials, setCredentials] = useState(initialCredentials);
 
  return <div>loginForm</div>;
};

LoginForm.propTypes = {};

export default LoginForm;
