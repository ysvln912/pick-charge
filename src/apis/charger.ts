import { api } from "./@config";

const chargerApi = {
    async getChargerList(location: string) {
        try {
            const response = await api.get(
                `/chargers?location=${location}`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getChargerDetail(chargerId: number, userId: number) {
        try {
            const response = await api.get(
                `/chargers/${chargerId}`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getFavoritesCharger(userId: number) {
        try {
            const response = await api.get(`/favorites`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export default chargerApi;
