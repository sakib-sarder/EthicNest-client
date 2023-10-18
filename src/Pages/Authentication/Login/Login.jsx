import { Link } from "react-router-dom";
import loginBanner from "../../../assets/login_banner.jpg";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false)
  return (
    <section className="h-[100vh] flex items-center justify-center gap-4 w-4/5 container mx-auto">
      {/* Login Banner */}
      <div className="w-1/2 lg:w-1/3">
        <img src={loginBanner} alt="login banner" />
      </div>
      {/* Right side */}
      <div className="w-1/2 lg:w-1/3">
        <Link to="/" className="flex items-center justify-end ">
          <div className="bg-blue-600 flex items-center justify-center text-white px-2 py-1.5 rounded-sm ">
            <HomeIcon />
            <span>Home</span>
          </div>
        </Link>
        <div className="flex flex-col gap-2 pb-6">
          <p className="capitalize text-[1.5rem] font-bold">
            Login to your account
          </p>
          <p className="text-sm">
            Don&apos;t have an account yet?{" "}
            <Link to="/signup" className="underline text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div className="">
            <label
              htmlFor="email"
              className="text-sm font-medium tracking-wider"
            >
              Email Address
            </label>
            <input
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
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-600"  onClick={()=>setShowPass(!showPass)}>
                {showPass? <VisibilityIcon /> : <VisibilityOffIcon/>}
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="">
            <input
              type="submit"
              value="Login Now"
              className="bg-blue-600  py-1.5 text-xl font-bold tracking-wider text-white rounded-[5px] w-full"
            />
          </div>
        </form>
      </div>
      {/*  */}
    </section>
  );
};

export default Login;
