import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/Authcontext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = (response: any) => {
    login(response);
    navigate('/Landing'); // Redirige al dashboard tras el inicio de sesión
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
};

export default Login;