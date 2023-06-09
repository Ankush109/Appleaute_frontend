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
const GetCateogry = async () => {
  const { data } = await AuthAPI().get("/products/get-categories");
  return data;
};
const GetProduct = async () => {
  const { data } = await AuthAPI().get("/products/get-products");
  return data;
};
const GetProductQuery = () =>
  useQuery({
    queryKey: ["get-product"],
    queryFn: () => GetProduct(),
    select: (data) => {
      return data;
    },
  });
const GetCategoryQuery = () =>
  useQuery({
    queryKey: ["get-category"],
    queryFn: () => GetCateogry(),
    select: (data) => {
      return data;
    },
  });
export { GetProductQuery, GetCategoryQuery };
