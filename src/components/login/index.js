import React from 'react'

import{Link} from "react-router-dom";
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
        
        <LoginForm></LoginForm>
        <Link to="/register">У вас нет учетной записи</Link>
    </div>
  )
}

export default Login