const TokenService = {
  setToken(token: string) {
    localStorage.setItem(`${import.meta.env.VITE_APP_TOKEN_KEY}`, token);
  },

  getToken() {
    return localStorage.getItem(`${import.meta.env.VITE_APP_TOKEN_KEY}`);
  },

  removeToken() {
    localStorage.removeItem(`${import.meta.env.VITE_APP_TOKEN_KEY}`);
  },
};

export default TokenService;
