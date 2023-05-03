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
      baseURL: `http://localhost:5000/v1/`,
      headers: {
        authorization: `Bearer }`,
        "Content-Type": "application/json",
      },
    });
  }
};
const GetProduct = async () => {
  const { data } = await AuthAPI().get("/products/get-products");
  return data;
};
const GetProductQuery = () =>
  useQuery({
    queryKey: "getProduct",
    queryFn: GetProduct,
    select: (data) => {
      return data;
    },
  });
export { GetProductQuery };
