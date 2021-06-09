import router from "../router";
import store from "../store";

const requestInterceptor = (config) => {
  if (store.state.user.isLoggedIn) {
    config.headers[
      store.state.config.jwtHeader
    ] = `${store.state.config.jwtPrefix} ${store.state.user.token}`;
  }

  return config;
};

const responseInterceptor = (response) => {
  return response;
};

const authErrorInterceptor = (error) => {
  // If no response then likely network error return Promise.reject
  if (!error.response) {
    return Promise.reject(error);
  }
  // Not authorised logout out and send to Login page
  if (
    (error.response.status === 401 &&
      error.request.responseURL &&
      error.request.responseURL.indexOf("auth") === -1) ||
    !error.request.responseURL
  ) {
    store.dispatch("setUserLoggedOut");
    router.push({ name: "Login" });
  }

  return Promise.reject(error);
};

export { requestInterceptor, responseInterceptor, authErrorInterceptor };
