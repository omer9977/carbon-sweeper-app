import axios from 'axios';
import config from '../utils/config';
// import decodeJWT from "../utils/jwtDecoder";


const apiAuthUrl = `${config.apiUrl}/user`;
const token = localStorage.getItem("accessToken");

const getLeaderBoard = async (answers) => {
  try {
    
    const response = await axios.get(`${apiAuthUrl}/foot-prints`);


    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

const getUsersWelcomeDataAsync = async (answers) => {
  try {
    
    const response = await axios.get(`${apiAuthUrl}/welcome`);


    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

const getUserInfosAsync = async (answers) => {
  try {
    
    const response = await axios.get(`${apiAuthUrl}/info`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

export { getLeaderBoard, getUsersWelcomeDataAsync, getUserInfosAsync };
