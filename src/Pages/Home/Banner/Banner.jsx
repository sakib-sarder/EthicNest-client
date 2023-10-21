import Categories from "./Categories";
import Slider from "./Slider";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row mt-2 gap-2">
      <div className="lg:w-1/4">
        <Categories />
      </div>
      <div className="lg:w-3/4">
        <Slider />
      </div>
    </section>
  );
};

export default Banner;
