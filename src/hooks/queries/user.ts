import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import userApi from "@/apis/user";
import TokenService from "@/utils/tokenService";
import MESSAGE from "@/constants/message";
import { setCookie } from "@/utils/cookie";
import { useToast } from "../useToast";
import { UserInfoRequest } from "@/types";

const useLogin = () => {
  const navigate = useNavigate();
  const { triggerToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      userApi.login(data),
    onSuccess: (res) => {
      TokenService.setToken(res.token);
      setCookie("refreshToken", res.refreshToken);
      triggerToast(MESSAGE.LOGIN.SUCCESS, "success");
      navigate("/");
    },
    onError: (error: AxiosError<string>) => {
      if (error.response?.data) {
        triggerToast(MESSAGE.ERROR.DEFAULT, "error");
      }
    },
  });

  return {
    login: mutate,
  };
};

const useSignUp = (func: () => void) => {
  const { triggerToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: (data: UserInfoRequest) => userApi.signup(data),
    onSuccess: () => {
      func();
    },
    onError: (error: AxiosError<string>) => {
      if (error.response?.data) {
        triggerToast(MESSAGE.ERROR.DEFAULT, "error");
      }
    },
  });

  return {
    signUp: mutate,
  };
};

const useGetUserInfo = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => {
      return userApi.getUserInfo();
    },
  });
  return { data, ...rest };
};

export { useSignUp, useLogin, useGetUserInfo };
