import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GoogleLogin, googleLogout, CredentialResponse } from '@react-oauth/google';

type AuthContextType = {
  user: any;
  login: (response: CredentialResponse) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = (response: CredentialResponse) => {
    // Decodifica el token JWT y guarda los datos del usuario
    setUser(response);
  };

  const logout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};