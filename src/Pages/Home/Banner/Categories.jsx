import CategoryIcon from "@mui/icons-material/Category";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from '@mui/icons-material/Woman';
import BoyIcon from '@mui/icons-material/Boy';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
const Categories = () => {
  return (
    <div className="border rounded px-1 py-2 shadow-md">
      {/* Categories heading */}
      <div className="border rounded-t px-2 text-lg font-semibold tracking-wider shadow-lg flex items-center gap-1 py-1">
        <CategoryIcon />
        <p>Categories</p>
      </div>
      {/* All categories */}
      <div className="border rounded-b  text-sm font-semibold tracking-wider shadow-lg mt-1">
        {/* Category one */}
        <div className="flex  gap-[1px] items-center py-1 cursor-pointer hover:ps-1 transition-all hover:bg-gray-300">
          <ManIcon style={{ fontSize: "1.6rem" }} />
          <p>Mens Fashion</p>
        </div>
        {/* Category two */}
        <div className="flex  gap-[1px] items-center py-1 cursor-pointer hover:ps-1 transition-all hover:bg-gray-300">
          <WomanIcon style={{ fontSize: "1.6rem" }} />
          <p>Womens Fashion</p>
        </div>
        {/* Category three */}
        <div className="flex  gap-[1px] items-center py-1 cursor-pointer hover:ps-1 transition-all hover:bg-gray-300">
          <BoyIcon style={{ fontSize: "1.6rem" }} />
          <p>Kids Fashion</p>
        </div>
        {/* Category four */}
        <div className="flex  gap-[1px] items-center py-1 ps-1  cursor-pointer hover:ps-2 transition-all hover:bg-gray-300">
          <SportsSoccerIcon style={{ fontSize: "1rem" }} />
          <p className="ps-1">Sports</p>
        </div>
        {/* Category five */}
        <div className="flex  gap-[1px] items-center py-1 ps-1  cursor-pointer hover:ps-2 transition-all hover:bg-gray-300">
          <SpeakerGroupIcon style={{ fontSize: "1rem" }} />
          <p className="ps-1">Electronics Devices</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
