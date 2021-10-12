import axios from 'axios';

const END_POINT = 'https://api.spacexdata.com/v3';

const API = {
  getMissions: async () => {
    try {
      const response = await axios.get(`${END_POINT}/missions`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default API;
