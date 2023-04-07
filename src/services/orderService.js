import { get, post } from "./apiService";

const endpoints = {
  getAll: "/data/orders",
  create: "/data/orders",
  createItems: "/data/sci",
  getMyOrders: (ownerId) =>
    `/data/orders?where=${encodeURIComponent(`_ownerId="${ownerId}"`)}`,
  getOrderDetails: (orderId) => `/data/sci?where=${encodeURIComponent(`_orderId="${orderId}"`)}`,
};

export const create = async (token, order, shoppingCartItems) => {
  let responce = await post(endpoints.create, token, order);

  shoppingCartItems.forEach(async (el) => {
    await post(endpoints.createItems, token, {
      _orderId: responce._id,
      qty: el.qty,
      imageUrl: el.imageUrl,
      description: el.description,
      price: el.price,
      name: el.name,
      subTotal: el.subTotal,
    });
  });
};

export const getMyOrders = async (token, ownerId) => {
  let responce = await get(endpoints.getMyOrders(ownerId), token);
  return responce;
};

export const getOrderDetails = async (token, orderId) => {
    let responce = await get(endpoints.getOrderDetails(orderId), token);
    return responce;
}
