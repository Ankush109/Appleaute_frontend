import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { GetProductQuery } from "../api/products";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
