import { api } from "./@config";
import { UserType } from "@/types";

const userApi = {
  signup(data: UserType) {
    return api.post("/user/signUp", data).then((response) => response.data);
  },

  login(data: { email: string; password: string }) {
    return api.post("/user/login", data).then((response) => response.data);
  },
};

export default userApi;
