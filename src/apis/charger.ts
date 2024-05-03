import { api } from "./@config";

const chargerApi = {
    async getChargerlist(location: string) {
        return await api
            .get(`/chargers?location=${location}`)
            .then((response) => {
                return response.data;
            })
            .catch((err: any) => {
                console.log(err);
            });
    },

    async getChargerDetail(chargerId: number, userId: number) {
        return await api
            .get(`/chargers/${chargerId}/users/${userId}`)
            .then((response) => {
                return response.data;
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
};

export default chargerApi;
