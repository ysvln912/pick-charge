import { api } from "./@config";

const myChargerApi = {
  async getMyChargerlist(userId: string) {
    return await api
      .get(`/chargers/users/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  },
};

export default myChargerApi;
