import axios from 'axios';
import config from '../utils/config';
// import decodeJWT from "../utils/jwtDecoder";


const apiAuthUrl = `${config.apiUrl}/calculation`;
const token = localStorage.getItem("accessToken");
// const decodedToken = decodeJWT(token);
const configAxios = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const calculateFootPrint = async (answers) => {
  try {
    const data = {
      // clothesTl: answers.generalConsumption.clothes,
      dietType: answers.generalConsumption1.diet,
      electronicsTl: answers.generalConsumption2.electronics,
      foodTl: answers.generalConsumption1.food,
      funTl: answers.generalConsumption2.fun,
      paperTl: answers.generalConsumption1.paper,
      coalTl: answers.house.coal,
      electricityTl: answers.house.electricity,
      lpgTl: answers.house.naturalGas,
      carFuelTl: answers.transportation.fuel,
      publicTransportTl: answers.transportation.publicTransport,
      transportFrequency: answers.transportation.transportFrequency,
      dressingTl: answers.generalConsumption2.dressing,
      paperProductTl: answers.generalConsumption1.paperProduct,
    };
    
    const response = await axios.post(`${apiAuthUrl}/calculate-foot-print`, data, configAxios);


    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.data;
  }
};

const getFootPrintWarnings = async () => {
  try {
    const response = await axios.get(`${apiAuthUrl}/get-foot-print-warnings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response); // Yanıt verilerini konsolda göster

    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
  }
};

export { getFootPrintWarnings, calculateFootPrint };
