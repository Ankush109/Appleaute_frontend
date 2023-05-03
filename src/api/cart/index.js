import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const AuthAPI = () => {
  if (typeof window !== "undefined") {
    return axios.create({
      baseURL: `http://localhost:5000/v1/`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: `https://localhost:5000/v1/`,
      headers: {
        authorization: `Bearer }`,
        "Content-Type": "application/json",
      },
    });
  }
};

const deleteCart = async (productId) => {
  const { data } = await AuthAPI().delete(`/cart/delete-cart/`, productId);
  return data;
};
const GetUserCart = async () => {
  const { data } = await AuthAPI().get("/cart/get-cart");
  return data;
};
const AddToCart = async (productId) => {
  const { data } = await AuthAPI().post("/cart/add-cart", {
    productId: productId,
  });
  return data;
};
const GetUserCartQuery = () =>
  useQuery({
    queryKey: ["get-user-cart"],
    queryFn: () => GetUserCart(),
    select: (data) => {
      return data.message;
    },
  });
export { GetUserCartQuery, AddToCart, deleteCart };
