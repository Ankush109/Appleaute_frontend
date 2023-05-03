import React from "react";
import Product from "./Product";
import CartItem from "./CartItems";
import Navbar from "./Navbar";
import { GetUserCartQuery, RemoveAllCart, deleteCart } from "../api/cart";
import { CreateOrder } from "../api/order";
import { toast } from "react-hot-toast";

function Cart() {
  const GetCartData = GetUserCartQuery();
  const total = GetCartData.data?.reduce(
    (acc, item) => acc + parseInt(item.product.price),
    0
  );
  return (
    <>
      <Navbar />
      <div className="  max-h-[100%]">
        <div className="flex">
          <div className=" w-2/3 flex h-[90vh] overflow-y-scroll flex-col  ">
            <div className="bg-white sticky top-0 z-50">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold p-3 m-3  ">
                  My Shopping Cart
                </h1>
              </div>
              <hr class="h-px  bg-gray-200 border-0 m-3 dark:bg-gray-700" />
            </div>
            {total > 0 ? (
              GetCartData.data?.map((item) => (
                <CartItem
                  key={item.product.id}
                  id={item.id}
                  name={item.product.name}
                  price={item.product.price}
                  image={item.product.image}
                />
              ))
            ) : (
              <div className="flex my-52 justify-center items-center">
                {" "}
                <p className="text-2xl font-medium"> No Items in Cart 🙃 </p>
              </div>
            )}
          </div>
          <div className="bg-gray-300 w-1/2 ">
            <div className="mx-10 bg-white h-2/3 my-7">
              <h1 className="text-2xl font-bold p-3 text-center ">
                Price Details
              </h1>
              <hr class="h-px my-8 bg-gray-200 border-0 m-10 dark:bg-gray-700" />
              <div className="flex justify-between mx-10">
                <h1 className="text-xl">Price ({GetCartData.data?.length})</h1>

                <h1 className="text-xl">₹ {total}</h1>
              </div>
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Discount</h1>

                <h1 className="text-xl"> - ₹ 0</h1>
              </div>
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Delivery Charges</h1>

                <h1 className="text-xl text-green-600"> Free </h1>
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0 m-10 dark:bg-gray-700" />
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Total Ammount</h1>

                <h1 className="text-xl text-green-600">₹{total} </h1>
              </div>
              <button
                onClick={() => {
                  if (GetCartData.data?.length === 0) {
                    toast.error("Cart is Empty");
                  } else if (GetCartData.data?.length > 0) {
                    CreateOrder();
                    toast.success("Order Placed Successfully");
                    GetCartData.refetch();
                  }
                }}
              >
                <div className="flex justify-center mx-56">
                  <h1 className="text-xl text-white bg-green-600 p-3 rounded-md my-3">
                    Place Order
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
