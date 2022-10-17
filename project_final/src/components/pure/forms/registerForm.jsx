import React, { useState } from 'react'
import PropTypes from 'prop-types'

const RegisterForm = props => {

    const initialCredentials = [
        {
          user: "",
          name:"",
          mail:"",
          pass: ""
        },
      ];
      const [credentials, setCredentials] = useState(initialCredentials);
     
  return (
    <div>registerForm</div>
  )
}

RegisterForm.propTypes = {}

export default RegisterForm