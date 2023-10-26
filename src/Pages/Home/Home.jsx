import Map from "../../Components/Map/Map";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div className="space-y-4">
      <Banner />
      <Features />
      <Map/>
    </div>
  );
};

export default Home;
