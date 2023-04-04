import  { del, get, post, put } from "./apiService";

const endpoints = {
    getAll: "/data/orders",
    create: "/data/orders",
    createItems: "/data/sci",
    delete: (id) => `/data/products/${id}`,
    edit: (id) => `/data/products/${id}`
  };

export const create = async (token, order, shoppingCartItems) => {
    await post(endpoints.create, token, order);

    shoppingCartItems.forEach(element => {
        element["_orderId"] = responce._id
    });

    await post(endpoints.createItems, token, shoppingCartItems);

}
