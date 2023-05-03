import React, { useState } from "react";
import Navbar from "./Navbar";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Product from "./Product";
import { GetCategoryQuery, GetProductQuery } from "../api/products";

function Home() {
  const GetProductQueryData = GetProductQuery();

  return (
    <div>
      <Navbar />
      <div>
        <div className="lg:flex bg-gray-300 flex-wrap sm:flex justify-center">
          {GetProductQueryData.data?.message?.map((product) => (
            <Product
              key={product._id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
