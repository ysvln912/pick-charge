import TokenService from "./tokenService";

const logout = () => {
  TokenService.removeToken();
};

export default logout;
