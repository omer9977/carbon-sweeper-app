import axios from 'axios';
import config from '../utils/config';

const apiAuthUrl = `${config.apiUrl}/auth`;

const authenticateUser = async (email, password) => {
  try {
    // console.log(`${apiAuthUrl}/login`);
    const response = await axios.post(`${apiAuthUrl}/login`, {
      userNameOrEmail: email,
      password: password
    });

    console.log(response.data); // Yanıt verilerini konsolda göster

    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

const register = async (values) => {
  try {
    // console.log(`${apiAuthUrl}/login`);
    const response = await axios.post(`${apiAuthUrl}/register`, {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username
    });

    console.log(response.data); // Yanıt verilerini konsolda göster

    return response.data; // Erişim belirteci (accessToken) döndür
  } catch (error) {
    return error.response.data;
  }
};

const logoutUser = async () => {
  try {
    const response = await axios.post(`${config.apiUrl}/logout`);

    // console.log(response.data); // Yanıt verilerini konsolda göster
  } catch (error) {
    // console.log(error);
    throw new Error('An error occurred during logout');
  }
};

export { authenticateUser, logoutUser, register };
