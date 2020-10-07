const AuthTokenKey = "auth";

export default {
  setToken: (token) => {
    return localStorage.setItem(AuthTokenKey, token);
  },
  getToken: () => {
    return localStorage.getItem(AuthTokenKey);
  },

  isLogined: () => {
    if (localStorage.getItem(AuthTokenKey)) {
      return true;
    } else {
      return false;
    }
  },
};
