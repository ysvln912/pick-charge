import { api } from "./@config";
import logout from "@/utils/logout";

const mypageApi = {
    async logout(){
        try {
            const response = await api.post(`/user/logout`);
            logout();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export default mypageApi;
