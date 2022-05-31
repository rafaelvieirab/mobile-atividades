import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1/search',
  timeout: 2500,
});

api.interceptors.request.use(function(config){
  console.log("config");
  console.log(config);
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

export default api;