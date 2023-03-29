import  { get, post } from "./apiService";

const endpoints = {
    getAll: "/data/products",
    create: "/data/products",
  };

export const Create = async (product, token) => {
    return await post(endpoints.create, token, product);
}

export const GetAll = async (token) => {
    return await get(endpoints.getAll, token);

}