import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <footer className="bg-[#BEDDFF] mt-2 py-3">
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* Company name and info */}
        <div>
          <div>
            <Link to="/">
              <span className="text-[2rem] font-semibold logo_font text-[#1976D2]">
                EthicNest
              </span>
            </Link>
            <p className="text-sm">
              Elevate Your Shopping Experience with Endless Choices
            </p>
          </div>
          <div className="flex justify-start gap-1">
            <FacebookIcon className="hover:text-blue-600 cursor-pointer" style={{fontSize: "2.3rem"}} />
            <LinkedInIcon className="hover:text-blue-500 cursor-pointer" style={{fontSize: "2.3rem"}} />
            <InstagramIcon className="hover:text-orange-700 cursor-pointer" style={{fontSize: "2.3rem"}} />
            <TwitterIcon className="hover:text-blue-600 cursor-pointer" style={{fontSize: "2.3rem"}} />
            <RedditIcon className="hover:text-orange-600 cursor-pointer" style={{fontSize: "2.3rem"}} />
          </div>
        </div>
        {/* Contact column */}
        <div className="text-sm">
          <p className="text-2xl font-bold">Contact Us</p>
          <address>House #8, Road #14, Dhanmondi, Dhaka-1209.</address>
          <p>Email: support@ethicnest.com</p>
        </div>
        {/* Contact column */}
        <div className="text-sm">
          <p className="text-2xl font-bold">Let Us Help You</p>
          <ul>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Track Your Order</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        {/* pickup points */}
        <div className="">
          <p className="text-2xl font-bold">Our Pickup Point</p>
          <ul>
            <li><a href="">Jatrabari</a></li>
            <li><a href="">Wari</a></li>
            <li><a href="">Rajsahi</a></li>
            <li><a href="">Chittagong</a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        {/* maps */}
        <div className="">
          <p className="text-2xl font-bold pb-1">Main Pickup Point</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.03912029734!2d90.375862!3d23.74703065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1697975253566!5m2!1sen!2sbd" className="w-full" allowfullscreen="" loading="lazy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
