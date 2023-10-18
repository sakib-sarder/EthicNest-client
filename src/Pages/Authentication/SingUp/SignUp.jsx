import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../../../assets/login_banner.jpg";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserInfo, setReload } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUser(email, password).then((result) => {
        updateUserInfo(fullName).then(() => {
          setReload(true);
          navigate(from, { replace: true });
          console.log(result);
        });
      });
    }
  };

  return (
    <section className="h-[100vh] flex items-center flex-row-reverse justify-center gap-4 w-4/5 container mx-auto">
      {/* SignUp Banner */}
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
            Register Now!
          </p>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-500">
              Login
            </Link>
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-1" onSubmit={handleSignUp}>
          {/* Name */}
          <div className="">
            <label
              htmlFor="fullName"
              className="text-sm font-medium tracking-wider"
            >
              Full Name
            </label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              className="border-[1px] border-blue-400 block w-full py-1.5 px-2 focus:outline-none placeholder:text-gray-600 placeholder:tracking-wide tracking-wide rounded-[5px]"
              placeholder="John Doe"
            />
          </div>
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
            <div className="pb-1">
              <label
                htmlFor="password"
                className="text-sm font-medium tracking-wider"
              >
                Password
              </label>
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
          </div>
          {/*Confirm Password */}
          <div className="">
            <div className="pb-1">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium tracking-wider"
              >
                Confirm Password
              </label>
            </div>
            <div className="relative">
              <input
                name="confirmPassword"
                id="confirmPassword"
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
          </div>
          {/* Submit Button */}
          <div className="pt-3">
            <input
              type="submit"
              value="Register Now"
              className="bg-blue-600  py-1.5 text-xl font-bold tracking-wider text-white rounded-[5px] w-full cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
