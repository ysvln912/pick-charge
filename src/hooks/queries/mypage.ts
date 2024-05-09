import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import mypageApi from "@/apis/mypage";
import logout from "@/utils/logout";
import TokenService from "@/utils/tokenService";

const useLogout = () => {
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: () => mypageApi.logout(),
        onSuccess: () => {
            logout();
            TokenService.removeToken();
            navigate("/");
        },
        onError: (error: AxiosError<string>) => {
            console.log(error);
        },
    });
    return {
        logout: mutate,
    };
};

export { useLogout };
