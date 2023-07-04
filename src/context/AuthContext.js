import React, { createContext, useState } from 'react';
import { authenticateUser, logoutUser } from '../services/AuthService';
import showToast from '../utils/showToast';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken]   = useState(localStorage.getItem('accessToken') || null);

  const login = async (email, password) => {
    try {
      const response = await authenticateUser(email, password);
      console.log(response);
      if (!response.hasError) {
        console.log(response);
        const token = response.data.token.accessToken;
        console.log(token);
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
        showToast("success", "Login success");
      } else {
        console.log(response.error);
        showToast("error", response.error);
      }
      return response;
    } catch (error) {
      console.log(error);
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
