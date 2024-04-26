import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import userApi from "@/apis/user";

//  임시 작성!!!
const useLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: userApi.login,
    onSuccess: () => {
      alert("로그인 되었습니다!");
      navigate("/");
    },
    onError: (error: AxiosError<string>) => {
      if (error.response?.data) {
        alert(error.response.data);
      }
    },
  });

  return {
    login: mutate,
  };
};

const useSignUp = () => {
  const { mutate } = useMutation({
    mutationFn: userApi.signup,
    onSuccess: () => {},
    onError: (error: AxiosError<string>) => {
      if (error.response?.data) {
        alert(error.response.data);
      }
    },
  });

  return {
    signUp: mutate,
  };
};

export { useSignUp, useLogin };
