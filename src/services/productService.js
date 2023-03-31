import  { del, get, post, put } from "./apiService";

const endpoints = {
    getAll: "/data/products",
    create: "/data/products",
    delete: (id) => `/data/products/${id}`,
    edit: (id) => `/data/products/${id}`
  };

export const create = async (token, product) => {
    return await post(endpoints.create, token, product);
}

export const getAll = async () => {
    return await get(endpoints.getAll);
}

export const deleteProduct = async (id, token)=>{
    let responce = await del(endpoints.delete(id), token);
    console.log(responce);
}

export const editProduct = async (token, product) => {
    return await put(endpoints.edit(product._id), token, product);
}