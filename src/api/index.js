import http from "./httpService";

const api = {};

const handleResponse = (res) => res.data;

api.fetchUser = () => http.get("/username").then(handleResponse);

// bulk connection endpoints
function generateApiFrom(name) {
  return {
    get: () => http.get(`${name}`).then((res) => res.data),
    getOne: ({ id }) => http.get(`${name}/${id}`).then(handleResponse),
    update: (obj) => http.put(`${name}/${obj.id}`, obj).then(handleResponse),
    create: (obj) => http.post(`${name}`, obj).then(handleResponse),
    remove: (obj) => http.delete(`${name}/${obj.id}`).then((res) => res), // removed .data because there was none
  };
}

["files"].forEach((name) => {
  api[name] = generateApiFrom(name);
});

console.log(api);

export default api;
