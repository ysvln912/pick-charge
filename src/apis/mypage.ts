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
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    async editUserInfo(newUserInfo: NewUserInfo) {
        console.log(newUserInfo)
        try {
            const response = await api.patch(`/user/updateUser`, newUserInfo, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async deleteUser() {
        try {
            const response = await api.delete("/user");
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export default mypageApi;
