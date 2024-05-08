/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";

import { userAtom } from "@/atoms/userAtom";
import { useGetUserInfo } from "@/hooks/queries/user";
import TokenService from "@/utils/tokenService";

const useCheckUserInfo = () => {
  const [user, setUser] = useAtom(userAtom);
  const location = useLocation();

  const { data } = useGetUserInfo();
  useEffect(() => {
    if (data) {
      const {
        id,
        nickName,
        username,
        email,
        chargerType,
        address,
        phoneNumber,
        profileImage,
      } = data;
      setUser({
        id,
        nickName,
        username,
        email,
        chargerType,
        address,
        phoneNumber,
        profileImage,
      });
    }
  }, [location.pathname, data]);

  return { user, setUser };
};

export default useCheckUserInfo;
