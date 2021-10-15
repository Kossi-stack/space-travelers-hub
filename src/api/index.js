import axios from 'axios';

const END_POINT = 'https://api.spacexdata.com/v3';

const API = {
  getMissions: async () => {
    try {
      const response = await axios.get(`${END_POINT}/missions`);

      return response.data;
    } catch (error) {
      return error;
    }
  },
  getRockets: async () => {
    try {
      const response = await axios.get(`${END_POINT}/rockets`);

      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default API;
