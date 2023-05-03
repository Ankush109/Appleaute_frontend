import React from "react";
import Navbar from "./Navbar";
import { GetUserQuery } from "../api/user";
import CartItem from "./CartItems";

function Order() {
  const userQuery = GetUserQuery();

  const total = userQuery.data?.message.order.reduce(
    (acc, item) => acc + parseInt(item.product.price),
    0
  );
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex gap-2">
        <div className="bg-white p-10">
          <h1 className="text-xl">Hi, {userQuery.data?.message.name}</h1>
          <h1 className="text-2xl font-bold">
            Your Order has been placed successfully 🥳
          </h1>
        </div>
        <div className="bg-white p-10">
          <div className="flex justify-around ">
            <h1 className="text-xl p-2 font-serif font-semibold mx-10">
              Ordered Items
            </h1>
            <h2 className="my-3 font-semibold">₹ {total}</h2>
          </div>
          <hr className="border-2 border-gray-200 mx-10" />
          {userQuery.data?.message.order?.map((item) => (
            <CartItem
              order={true}
              key={item.product.id}
              id={item.id}
              name={item.product.name}
              price={item.product.price}
              image={item.product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
