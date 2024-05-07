/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const cookieAttributes = {
  path: "/",
  maxAge: 10 * 60,
  secure: false,
  httpOnly: true,
};

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, cookieAttributes);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
