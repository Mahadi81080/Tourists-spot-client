import { useLoaderData } from "react-router-dom";
import Country from "./Country";
 

const Countries = () => {
  const loadedCountries = useLoaderData();
  console.log(loadedCountries);
  return (
    <div>
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
          {loadedCountries.map((country) => (
           <Country key={country._id} country={country}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
