import axios from 'axios';
import config from '../utils/config';
import decodeJWT from "../utils/jwtDecoder";


const apiAuthUrl = `${config.apiUrl}/calculation`;
const token = localStorage.getItem("token");
const decodedToken = decodeJWT(token);

const getFootPrintWarnings = async () => {
  try {
    const response = await axios.get(`${apiAuthUrl}/get-foot-print-warnings/${decodedToken.userId}`);

    console.log(response); // Yanıt verilerini konsolda göster

    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

export { getFootPrintWarnings };
