import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import TouristSpot from "../../Components/TouristSpot";
 

const Home = () => {
  const specificSpots = useLoaderData();
  const sixSpots =specificSpots.slice(0,6)
  console.log(sixSpots);
  return (
    <div className="px-5 lg:px-10">
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 ml-0 md:ml-6 lg:ml-0 lg:gap-5 ">
        {sixSpots.map((spot) => (
         <TouristSpot key={spot._id} spot={spot}></TouristSpot>
        ))}
      </div>
    </div>
  );
};

export default Home;
