import React from "react";
import Product from "./Product";
import CartItem from "./CartItems";
import Navbar from "./Navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <div className=" max-h-[100%]">
        <div className="flex">
          <div className=" w-2/3 flex h-[90vh] overflow-y-scroll flex-col  ">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="bg-gray-300 w-1/2 ">
            <div className="mx-10 bg-white h-2/3 my-7">
              <h1 className="text-2xl font-bold p-3 text-center ">
                Price Details
              </h1>
              <hr class="h-px my-8 bg-gray-200 border-0 m-10 dark:bg-gray-700" />
              <div className="flex justify-between mx-10">
                <h1 className="text-xl">Price (3 items)</h1>

                <h1 className="text-xl">₹ 1000</h1>
              </div>
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Discount</h1>

                <h1 className="text-xl"> - ₹ 100</h1>
              </div>
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Delivery Charges</h1>

                <h1 className="text-xl text-green-600"> Free </h1>
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0 m-10 dark:bg-gray-700" />
              <div className="flex justify-between mx-10 my-4">
                <h1 className="text-xl">Total Ammount</h1>

                <h1 className="text-xl text-green-600">₹ 10000 </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
