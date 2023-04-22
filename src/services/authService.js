import { get, post } from "./apiService";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password, token) {
  const data = await post(endpoints.login, token, { email, password });
  return data;
}

export async function register(username, email, password, token) {
  const data = await post(endpoints.register, token, {
    username,
    email,
    password,
  });
  return data;
}

export function logout(token) {
   get(endpoints.logout, token);
}
