import React, { createContext, useState } from 'react';
import { authenticateUser, logoutUser } from '../services/AuthService';
import showToast from '../utils/showToast';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken]   = useState(localStorage.getItem('accessToken') || null);

  const login = async (email, password) => {
    try {
      const response = await authenticateUser(email, password);

      if (!response.hasError) {
        console.log(response);
        const token = response.data.token.accessToken;
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
        showToast("success", response.data.token.accessToken);
      } else {
        console.log(response.error);
        showToast("error", response.error);
      }
      return response;
    } catch (error) {
      throw new Error(error);
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
