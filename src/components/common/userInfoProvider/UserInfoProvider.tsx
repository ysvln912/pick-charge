/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, ReactNode, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";

import userApi from "@/apis/user";
import MESSAGE from "@/constants/message";
import { userAtom } from "@/atoms/userAtom";

interface UserInfoProviderProps {
  children: ReactNode;
}

const UserInfoProvider = ({ children }: UserInfoProviderProps) => {
  const [user, setUser] = useAtom(userAtom);
  const location = useLocation();

  const checkUser = async () => {
    try {
      const userInfo = await userApi.getUserInfo();
      setUser(userInfo);
    } catch (err) {
      alert(MESSAGE.ERROR.DEFAULT);
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  return <Fragment>{children}</Fragment>;
};

export default UserInfoProvider;
