import React, { createContext, useState } from 'react';
import { authenticateUser, logoutUser } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken]   = useState(localStorage.getItem('accessToken') || null);

  const login = async (email, password) => {
    try {
      const response = await authenticateUser(email, password);

    //   if (response.success) {
        console.log(response);
        const token = response/*response.accessToken*/;
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
    //   } else {
    //     console.log(response.error);
    //   }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setAccessToken(null);
      localStorage.removeItem('accessToken');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
