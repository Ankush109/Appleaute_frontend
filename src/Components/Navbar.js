import React, { useEffect } from "react";
import { GetUserQuery } from "../api/user";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { GetUserCartQuery } from "../api/cart";

function Navbar() {
  const userQuery = GetUserQuery();
  const GetCartData = GetUserCartQuery();
  useEffect(() => {
    GetCartData.refetch();
  }, [GetCartData.data]);
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50">
      <div className=" bg-blue-500   p-4 ">
        <div className="flex justify-between ">
          <div>
            <a href="/">
              <h1 className="text-2xl font-bold text-white">E-Commerce</h1>
            </a>
          </div>
          <div>
            <ul className="flex space-x-4 text-white">
              <li className="font-bold">Hi, {userQuery.data?.message.email}</li>

              <a href="/cart">
                <AiOutlineShoppingCart size={25} />
              </a>
              <span className="text-white  font-bold">
                ({GetCartData.data?.length})
              </span>

              <li
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="font-bold hover:cursor-pointer"
              >
                Logout
              </li>
              <a href="/orders">
                <li className="font-bold hover:cursor-pointer">Orders</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
