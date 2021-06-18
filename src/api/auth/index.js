import http from "../httpService";

export default {
  login({ email, password }) {
    return http.post("auth", { email, password }).then((res) => res.data);
  },

  signup({ name, email, password, organisationId }) {
    return http
      .post("accounts/signup", {
        name,
        email,
        password,
        organisationId,
      })
      .then((res) => res.data);
  },

  confirm({ token }) {
    return http.post(`accounts/confirm/${token}`).then((res) => res.data);
  },

  resetPassword({ email }) {
    return http.post("accounts/reset", { email }).then((res) => res.data);
  },

  updatePassword({ password, passwordToken }) {
    return http
      .post(`accounts/new_password/${passwordToken}`, { password })
      .then((res) => res.data);
  },

  updateManagerPassword(email, oldPassword, newPassword) {
    return http.post("accounts/update_password", {
      email,
      old_password: oldPassword,
      new_password: newPassword,
    });
  },
};
