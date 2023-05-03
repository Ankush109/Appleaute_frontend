import React from "react";

function CartItem() {
  return (
    <div>
      <div className="bg-gray-200 flex mx-4 my-4">
        <div className="flex ">
          <div className="m-3 p-2 ">
            <img
              className="h-56 object-cover"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539"
            />
          </div>
          <div className="my-10">
            <h1 className=" text-bold font-bold"> Iphone 13 Max </h1>
            <p className=" m-2">₹100000</p>
            <button className="bg-blue-300 p-2 my-10 rounded-2xl">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
