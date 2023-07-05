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
      clothesTl: answers.generalConsumption.clothes,
      dietType: answers.generalConsumption.diet,
      electronicsTl: answers.generalConsumption.electronics,
      foodTl: answers.generalConsumption.food,
      funTl: answers.generalConsumption.fun,
      paperTl: answers.generalConsumption.paper,
      coalTl: answers.house.coal,
      electricityTl: answers.house.electricity,
      lpgTl: answers.house.naturalGas,
      carFuelTl: answers.transportation.fuel,
      publicTransportTl: answers.transportation.publicTransport,
      transportFrequency: answers.transportation.transportFrequency,
      dressingTl: answers.generalConsumption.dressing,
      paperProductTl: answers.generalConsumption.paperProduct,
    };
    
    const response = await axios.post(`${apiAuthUrl}/calculate-foot-print`, data, configAxios);


    return response.data // Erişim belirteci (accessToken) döndür
  } catch (error) {
    // console.log(error);
    // console.log(error.response.data);
    return error.response.data;
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
