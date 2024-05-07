/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";

import TokenService from "@/utils/tokenService";
import MESSAGE from "@/constants/message";
import { useToast } from "@/hooks/useToast";
import { userAtom } from "@/atoms/userAtom";

interface Props {
  children: ReactNode;
}

export default function Private({ children }: Props) {
  const [user] = useAtom(userAtom);
  const { triggerToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const token = TokenService.getToken();

  useEffect(() => {
    if (!token) {
      // if (!token || !user.id) {
      triggerToast(MESSAGE.LOGIN.REQUIRED);
      navigate("/login");
      return;
    }
  }, [location.pathname]);

  return <Fragment>{children}</Fragment>;
}
