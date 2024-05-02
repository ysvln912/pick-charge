import { api } from "./@config";

const chargerApi = {
    async getChargerlist(location: string) {
        return await api.get(`/chargers?location=${location}`).then((response) => {
            return response.data;
        }).catch((err:any)=>{
            console.log(err)
        });
    },
};

export default chargerApi;