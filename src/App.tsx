import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext/Authcontext';
import PrivateRoute from './contexts/PrivateRoute/PrivateRoute';
import Landing from './containers/Landing/Landing';
import Home from './containers/Home/Home';
import Comments from './containers/Comments/Comments';
import Login from './containers/LogIn/Login';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comments/:commentId" element={<Comments />} />          
          <Route
            path="/landing"
            element={
              <PrivateRoute>
                <Landing />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;