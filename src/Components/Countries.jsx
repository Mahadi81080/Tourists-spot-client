 
import Country from "./Country";
import { useEffect, useState } from "react";
 

const Countries = () => {
  const [loadedCountries, setLoadedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tourists-spot-server.vercel.app/countries");
        const data = await response.json();
        setLoadedCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);
  return (
    <div>
      <div className=" my-5">
        <div className="max-w-xl mx-auto my-10 text-center">
          <span className="font-bold tracking-wider uppercase text-[#ed5b31] text-2xl">
             Countries  Fetures
          </span>
          <h2 className=" font-bold">
          Tourist spots are popular destinations that attract visitors from
            around the world due to their natural beauty, historical
            significance, cultural importance, or recreational opportunities.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {loadedCountries.map((country) => (
           <Country key={country._id} country={country}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
