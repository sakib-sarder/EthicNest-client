import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../../../assets/login_banner.jpg";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import facebookLogo from "../../../assets/facebook_logo.png";
import googleLogo from "../../../assets/google_logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { LoginWithEmailPassword, signInWithGoogle } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Email password login
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password)
    LoginWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success(`Welcome Back ${result?.user?.displayName}`);
      })
      .catch((error) => {
        console.log(error, "line 31");
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-login-credentials"
        ) {
          setError("Invalid email or password");
          return;
        } else {
          setError("");
        }
      });
  };
  // Google login
  const handleGoogle = () => {
    signInWithGoogle().then((result) => {
      navigate(from, { replace: true });
      toast.success(`Welcome ${result?.user?.displayName}`);
    });
  };
  return (
    <section
      className="h-[100vh] flex items-center justify-center gap-4 w-4/5 container mx-auto"
      id="login_parent"
    >
      {/* Login Banner */}
      <div className="w-5/6 lg:w-1/3 hidden md:block">
        <img src={loginBanner} alt="login banner" />
      </div>
      {/* Right side */}
      <div className="w-full md:w-1/2 lg:w-1/3 border-[1px] px-2 py-8 md:px-0 md:py-0 border-black rounded-md md:rounded-none md:border-none">
        <Link to="/" className="flex items-center justify-end ">
          <div className="bg-blue-600 flex items-center justify-center text-white px-2 py-1.5 rounded-sm ">
            <HomeIcon />
            <span>Home</span>
          </div>
        </Link>
        <div className="flex flex-col gap-2 pb-2">
          <p className="capitalize tracking-wide text-[1.5rem] font-bold">
            Login to your account!
          </p>
          <p className="text-sm">
            Don&apos;t have an account yet?{" "}
            <Link to="/signup" className="underline text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email */}
          <div className="">
            <label
              htmlFor="email"
              className="text-sm font-medium tracking-wider"
            >
              Email Address
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="border-[1px] border-blue-400 block w-full py-1.5 px-2 focus:outline-none placeholder:text-gray-600 placeholder:tracking-wide tracking-wide rounded-[5px]"
              placeholder="xyz@gmail.com"
            />
          </div>
          {/* Password */}
          <div className="">
            <div className="flex justify-between pb-1">
              <label
                htmlFor="password"
                className="text-sm font-medium tracking-wider"
              >
                Password
              </label>
              <span className="text-sm font-medium tracking-wider text-red-400 cursor-pointer">
                Forget Password?
              </span>
            </div>
            <div className="relative">
              <input
                name="password"
                id="password"
                type={showPass ? "text" : "password"}
                className="border-[1px] border-blue-400 block w-full py-1.5 px-2 focus:outline-none placeholder:text-gray-600 placeholder:tracking-wide tracking-wide rounded-[5px]"
                placeholder="Enter Password"
              />
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-600"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <p className="text-xs text-right text-red-500 font-semibold">
              {error}
            </p>
          </div>
          {/* Submit Button */}
          <div className="">
            <input
              type="submit"
              value="Login Now"
              className="bg-blue-600  py-1.5 text-xl font-bold tracking-wider text-white rounded-[5px] w-full cursor-pointer"
            />
          </div>
        </form>
        {/* Social login */}
        <div>
          <div className="flex items-center py-0 lg:py-4">
            <hr className="flex-grow border-t border-gray-400"></hr>
            <span className="mx-2 capitalize font-semibold">or login with</span>
            <hr className="flex-grow border-t border-gray-400"></hr>
          </div>
          {/* Icons */}
          <div className="flex justify-center gap-2 lg:gap-4">
            {/* Google */}
            <button
              className="border-2 flex items-center gap-1 lg:gap-2 px-2 py-1 border-red-300"
              onClick={handleGoogle}
            >
              <img src={googleLogo} alt="google logo" className="w-7" />
              <span className="text-red-500 font-semibold text-lg">Google</span>
            </button>
            {/* Facebook */}
            <button className="border-2 flex items-center gap-1 lg:gap-2 px-2 py-1 border-blue-400">
              <img src={facebookLogo} alt="google logo" className="w-7" />
              <span className="text-blue-500 font-semibold text-lg">
                Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
