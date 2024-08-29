import React from 'react';
import { useAuth } from '../../contexts/authContext/Authcontext';

const Landing: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Landing;