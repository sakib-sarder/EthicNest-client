import Categories from "./Categories";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="flex flex-row-reverse mt-2 gap-2">
      <div className="w-3/4">
        <Slider />
      </div>
      <div className="w-1/4">
        <Categories />
      </div>
    </div>
  );
};

export default Banner;
