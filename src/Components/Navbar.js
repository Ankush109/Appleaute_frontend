import React from "react";
import { GetUserQuery } from "../api/user";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router";

function Navbar() {
  const userQuery = GetUserQuery();
  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-blue-500  p-4 ">
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
              <li
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="font-bold hover:cursor-pointer"
              >
                Logout
              </li>
              <li>Orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
