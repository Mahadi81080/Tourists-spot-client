import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import TouristSpot from "../../Components/TouristSpot";
import CustomerReview from "../../Components/CustomerReview";
import { Typewriter } from "react-simple-typewriter";
import Countries from "../../Components/Countries";
 
const Home = () => {
  const specificSpots = useLoaderData();
  const sixSpots = specificSpots.slice(0, 6);
  return (
    <div className="px-5 lg:px-10">
      <Banner></Banner>
      <div>
        <div className="max-w-xl mx-auto text-center space-y-3 my-6">
          <h2 className=" text-4xl font-semibold text-[#ed5b31]">
            <Typewriter
              words={["Tourists Spot"]}
              loop={5}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </h2>
          <p className="font-medium">
            Tourist spots are popular destinations that attract visitors from
            around the world due to their natural beauty, historical
            significance, cultural importance, or recreational opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 ml-0 md:ml-6 lg:ml-0 lg:gap-5 ">
          {sixSpots.map((spot) => (
            <TouristSpot key={spot._id} spot={spot}></TouristSpot>
          ))}
        </div>
      </div>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;




