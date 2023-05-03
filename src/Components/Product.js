import React from "react";

function Product() {
  return (
    <>
      <div className="bg-gray-200 w-1/4 h-full flex flex-col mx-4 my-4">
        <div className="">
          <div className="m-3 p-2">
            <img
              className="h-96 w-full object-cover"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539"
            />
          </div>
          <div className="items-center  m-4 flex flex-col">
            <h1 className=" text-bold font-bold"> Iphone 13 Max </h1>
            <p className=" m-2">₹100000</p>
          </div>
        </div>
        <button className="bg-blue-300 p-2 m-4 rounded-2xl">Add to Cart</button>
      </div>
    </>
  );
}

export default Product;
