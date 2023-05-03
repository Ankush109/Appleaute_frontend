import { TextField } from "@mui/material";
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { registerUser } from "../api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm({
    mode: "onChange",

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (formData) => {
    console.log(formData);
    toast.success("Registered successfully");
    console.table(formData);
    try {
      console.log("Submitting", formData);
      const { data } = await registerUser(formData);
      toast.success(data.message, { id: data.message });
      navigate("/Login");
      reset();
      // As reset will fallback to defaultValues
      // so they have to be cleared explicitly
      setValue("name", "");
      setValue("email", "");
      setValue("picture", null);
      setShowPassword(false);
      // setShowConfirmPassword(false);
      // router.replace("/Register");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex">
      <div className=" hidden lg:block w-1/2 h-screen bg-blue-400">
        <img
          className="object-cover h-full w-full"
          src="https://wallpaperaccess.com/full/2593043.jpg"
        />
      </div>
      <div className="flex lg:w-1/2  sm:w-full h-screen justify-center p-20">
        <div className="flex flex-col gap-4">
          <p className="text-gray-500">New User? </p>
          <h1 className="font-bold text-3xl font-mono">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 my-10">
              <div className="">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className="w-full rounded-lg text-white"
                  {...register("name")}
                />
              </div>
              <div className="">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-full rounded-lg text-white"
                  {...register("email")}
                />
              </div>
              <div className="relative">
                {/* p-2 mt-3 rounded-2xl border w-full */}
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="w-full rounded-lg text-white"
                  type={showPassword ? "text" : "password"}
                  placeholder="enter  a password"
                  {...register("password")}
                />
                <div
                  className="absolute top-8 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                  onClick={() => {
                    setShowPassword((showPassword) => !showPassword);
                  }}
                >
                  {showPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm italic">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="relative">
                {/* "p-2 mt-3 rounded-2xl border w-full" */}
                <TextField
                  className="w-full rounded-lg text-white"
                  id="confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  variant="outlined"
                  {...register("confirmPassword")}
                />
                <div
                  className="absolute top-8 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                  onClick={() =>
                    setShowConfirmPassword(
                      (showConfirmPassword) => !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm italic">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mx-10 p-5">
              <p
                className="
            text-gray-500 
          
            "
              >
                Already have an account?{" "}
              </p>
              <p
                className="text-blue-500 hover: cursor-pointer"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                {"  "}
                Sign In
              </p>
            </div>
            <button className="py-2 px-10 mx-24 my-4 bg-blue-400  text-white  rounded-xl hover:bg-blue-500 hover:text-white hover:scale-110 duration-300">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
