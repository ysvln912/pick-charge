import { api } from "./@config";
import logout from "@/utils/logout";

export interface NewUserInfo {
    file: string;
    userUpdateDto: {
        nickname: string;
        profileImage: string;
    };
}

const mypageApi = {
    async logout() {
        try {
            const response = await api.post(`/user/logout`);
            logout();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async editUserInfo(newUserInfo : NewUserInfo) {
        try {
            const response = await api.patch(`/user/updateUser`,newUserInfo);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async deleteUser() {
        try {
            const response = await api.delete('/user')
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

export default mypageApi;
