import { useEffect, useContext, useState } from "react";

import { getMyOrders, getOrderDetails } from "../../../services/orderService";
import { AuthContext } from "../../../contexts/AuthContext";

import Button from "../../Shared/Button/Button";
import OrderDetails from "../OrderDetails/OrderDetails";

import "./MyOrders.css";

export default function MyOrders() {
  const { token, userId } = useContext(AuthContext);
  const [ items, setItems ] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(
    () => async () => {
      let responce = await getMyOrders(token, userId);
      setOrders(Object.values(responce));
    },
    [token, userId]
  );

  const onClickOrder = async (id) => {
    try {
      let responce = await getOrderDetails(token, id);
      setItems(responce);
    } catch (error) {}
  };

  return (
    <>
      <div className="my-orders-holder">
        {orders
          .sort((a, b) => a < b)
          .map((el) => {
            let date = new Date(el._createdOn);
            return (
              <Button key={el._id} onClickHandler={() => onClickOrder(el._id)}>
                Order from {date.toLocaleString("bg-BG", { hour12: false })}
              </Button>
            );
          })}
      </div>
      <div className="order-items-holder">
        {items?.map((el) => <OrderDetails key={el._id} {...el} />)}
      </div>
    </>
  );
}
