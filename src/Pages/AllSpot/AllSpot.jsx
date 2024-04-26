import { useLoaderData } from "react-router-dom";
import Spot from "../../Components/Spot";

const AllSpot = () => {
  const touristsSpots = useLoaderData();
  return (
    <div className="mx-10 my-5">
      <div className="max-w-2xl mx-auto my-10 text-center">
        <span className="font-bold tracking-wider uppercase text-[#ed5b31]">
          The Best Spots
        </span>
        <h2 className="text-4xl font-bold lg:text-5xl">
          Choose your best plan for Spots
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {touristsSpots.map((spot) => (
          <Spot key={spot._id} spot={spot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default AllSpot;
