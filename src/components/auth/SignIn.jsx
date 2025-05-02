import axios from "axios";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import PulseLoader from "react-spinners/PulseLoader";
import { API } from "../../backend";
import { adminLogIn } from "../../hotelManagement/redux/actions/adminActions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLogIn } from "../../redux/actions/userActions";

// Yup schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API}auth/login`, data);
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      if (decodedToken?.user?.role === "guest") {
        dispatch(userLogIn(decodedToken.user));
        navigate("/");
      } // Check if the user is an admin
      else if (decodedToken?.user?.role === "admin") {
        dispatch(adminLogIn(decodedToken.user));
        navigate("/admin/dashboard");
      }
      if (token) {
        localStorage.setItem("accessToken", token);
        toast.success("Successfully Logged in!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Network error, try again!");
    }
  };

  return (
    <div className="h-[100vh] grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gray-100 flex flex-col justify-center px-10 py-6">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-left text-2xl font-bold text-navy-600">
            ASPEN GRAND HOTEL, Houston
          </h2>
          <h1 className="text-xl font-bold mt-6 text-navy-600">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Please enter your details below.</p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                {...register("email")}
                className="w-full p-3 border border-gray-300 rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
                className="w-full p-3 border border-gray-300 rounded mt-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-navy-600"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="/" className="text-sm text-[#33568f] hover:underline">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1b4281] hover:bg-[#002662] text-white font-bold rounded transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <PulseLoader size={8} color={"#fff"} />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/signUp"
                className="text-[#1b4281] hover:text-[#002662] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative">
        <img
          src="https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hotel"
          className="object-cover w-full h-[100vh]"
        />
      </div>
    </div>
  );
};

export default SignIn;
