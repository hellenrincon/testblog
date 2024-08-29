import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authContext/Authcontext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el componente hijo
  return <>{children}</>;
};

export default PrivateRoute;