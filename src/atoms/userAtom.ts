import { atom } from "jotai";
import { UserInfoResponse } from "@/types";

export const userAtom = atom<UserInfoResponse>({
  id: null,
  roleId: 1,
  username: "",
  email: "",
  nickName: "",
  chargerType: null,
  address: "",
  phoneNumber: "",
  profileImage: "",
});
