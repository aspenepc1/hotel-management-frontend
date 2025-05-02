import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
import { API } from "../../backend";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/actions/userActions";
import { adminSignUp } from "../../hotelManagement/redux/actions/adminActions";

// Validation schema
const schema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[0-9]/, "At least one number")
    .matches(/[!@#$%^&*]/, "At least one special character"),
});

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const isAdmin = pathname.includes("admin");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API}auth/register`, data);
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      if (decodedToken?.user?.role === "guest") {
        dispatch(userSignUp(decodedToken.user));
        navigate("/signIn");
      } else if (decodedToken?.user?.role === "admin") {
        dispatch(adminSignUp(decodedToken.user));
        navigate("/admin/sign-in");
      }
      if (response.status === 201) {
        toast.success("Account created successfully! Please log in.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Network error, please try again!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100vh] grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <img
          src="https://images.pexels.com/photos/7746950/pexels-photo-7746950.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hotel"
          className="object-cover w-full h-[100vh]"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center px-10 py-6">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-left text-2xl font-bold text-navy-600">
            ASPEN GRAND HOTEL, Houston
          </h2>
          <h1 className="text-xl font-bold mt-6 text-navy-600">Sign Up</h1>
          <p className="text-gray-600 mb-6">Please fill your details below.</p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="text-sm text-gray-700">
                Username
              </label>
              <input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm text-gray-700">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded mt-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <p className="text-sm mt-1 text-gray-500">
                Password must be at least 6 characters, 1 capital letter, 1
                number, and 1 special character.
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1b4281] hover:bg-[#002662] text-white font-bold rounded transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <PulseLoader size={8} color={"#fff"} />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signIn"
                className="text-[#1b4281] hover:text-[#002662] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
