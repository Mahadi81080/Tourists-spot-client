import { useLoaderData } from "react-router-dom";
import Spot from "../../Components/Spot";
import { Helmet } from "react-helmet-async";
 

const AllSpot = () => {
 
  const touristsSpots = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>All_Tourists_Spot</title>
      </Helmet>
      <div className="mx-10 my-5">
        <div className="max-w-2xl mx-auto my-10 text-center">
          <span className="font-bold tracking-wider uppercase text-[#ed5b31]">
            The Best Spots
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Choose your best plan for Spots
          </h2>
        </div>
        {/* <div className="text-center mt-4 pb-7">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
              Short By <FaChevronDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleSort("All")}>
                <a>All</a>
              </li>
              <li onClick={() => handleSort("asc")}>
                <a>Lowest cost</a>
              </li>
              <li onClick={() => handleSort("desc")}>
                <a>Highest cost</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {touristsSpots.map((spot) => (
            <Spot key={spot._id} spot={spot}></Spot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSpot;
