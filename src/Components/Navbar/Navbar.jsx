import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
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
            <input type="text" className="w-96 py-1.5 px-2 rounded-l-md placeholder:text-black border-[1px] border-r-0 border-[#1976D2] focus:outline-none" placeholder="Search Products"/>
            <input type="button" value="search" className="capitalize tracking-wide bg-[#1976D2] px-2 rounded-r-md cursor-pointer font-medium text-white"/>
          </div>
          {/* Login | SignUp Buttons*/}
          <div>
            <Link to="/login">
            <button className="flex items-center gap-1 bg-[#1976D2] text-white px-2 py-1.5 rounded-md">
              <span className="text-lg ">Login</span>
             <LoginIcon/>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
