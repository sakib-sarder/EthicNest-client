import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {/* Large Device laptop or avobe */}
      <nav className="bg-gray-300 py-1.5 px-2 md:py-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <span className="text-[2rem] font-semibold logo_font text-[#1976D2]">
                EthicNest
              </span>
            </Link>
          </div>
          {/* Search Bar */}
          <div className="md:flex hidden">
            <input
              type="text"
              className="w-96 py-1.5 px-2 rounded-l-md placeholder:text-black border-[1px] border-r-0 border-[#1976D2] focus:outline-none"
              placeholder="Search Products"
            />
            <input
              type="button"
              value="search"
              className="capitalize tracking-wide bg-[#1976D2] px-2 rounded-r-md cursor-pointer font-medium text-white"
            />
          </div>
          {/* Login | Avatar*/}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative group">
                <button className="bg-[#1976D2] text-white px-[0.25rem] py-[0.25rem] rounded">
                  <PersonIcon style={{ fontSize: "1.8rem" }} />
                </button>
                <div className="opacity-0 invisible w-24 text-white text-center text-xs py-2 absolute z-10 right-24 top-8 transition-all duration-300 transform translate-x-1/2 group-hover:opacity-100 group-hover:visible">
                  <div className="bg-[#1976D2] py-1 text-[0.85rem] rounded-sm tracking-wider font-semibold">
                    {user?.displayName}
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="flex items-center gap-1 bg-[#1976D2] text-white px-2 py-[0.29rem] rounded-sm">
                  <span className="text-lg ">Login</span>
                  <LoginIcon />
                </button>
              </Link>
            )}
            <div className="bg-[#1976D2] text-white py-[0.29rem] px-1.5 rounded-sm">
              <ShoppingCartIcon />
            </div>
          </div>
        </div>
        {/* Small Device */}
        {/* Search Bar */}
        <div className="flex justify-center py-2 md:hidden">
          <input
            type="text"
            className="w-80 py-1.5 px-2 rounded-l-md placeholder:text-black border-[1px] border-r-0 border-[#1976D2] focus:outline-none"
            placeholder="Search Products"
          />
          <input
            type="button"
            value="search"
            className="capitalize tracking-wide bg-[#1976D2] px-2 rounded-r-md cursor-pointer font-medium text-white"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
