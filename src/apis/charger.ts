import { api } from "./@config";

const chargerApi = {
    async getChargerlist(location: string) {
        try {
            const response = await api.get(`/chargers?location=${location}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getChargerDetail(chargerId: number, userId: number) {
        try {
            const response = await api.get(`/chargers/${chargerId}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export default chargerApi;


