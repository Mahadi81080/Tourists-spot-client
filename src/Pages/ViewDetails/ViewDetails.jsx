import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();
  const newDetails = details[0];
  console.log(newDetails);
  const {
    _id,
    Tourists_spot_name,
    Photo,
    User_name,
    User_email,
    totaVisitorsPerYear,
    Average_cost,
    Travel_time,
    Seasonality,
    location,
    short_description,
    County_name,
  } = newDetails;
  return (
    <div>
      <Helmet>
        <title>View_Details</title>
      </Helmet>
      <div className=" px-5 lg:px-10 mt-4">
        <div className="bg-orange-50 p-20 mb-8 text-center font-extrabold text-3xl">
          <h2>Tourists Spots Details</h2>
        </div>
        <section className=" bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
          <div className="container flex justify-center items-center flex-col mx-auto lg:flex-row">
            <div className="flex flex-col px-3 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/3 xl:w-3/5  text-gray-900">
              <img src={Photo} alt="" />
              <div className="flex items-center space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center ">
                  <p className="text-lg font-medium leading-snug">
                    County_name:
                  </p>
                  <p className="leading-snug">{County_name}</p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center">
                  <p className="text-lg font-medium leading-snug">
                    Spot description :
                  </p>
                  <p className="leading-snug">{short_description}</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 text-black p-5">
              <div className=" p-4 md:p-8 lg:p-12 bg-orange-50 rounded-lg">
                <div className="mb-8 space-y-2 text-center lg:text-left">
                  <div className="border-b border-gray-300 pb-3">
                    <h2 className="text-xl font-extrabold">Spots Details</h2>
                  </div>
                  <p>
                    <span className="text-lg font-medium">
                      Tourists_spot_name{" "}
                    </span>
                    :{Tourists_spot_name}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Seasonality </span>:
                    {Seasonality}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Average_cost </span>:
                    {Average_cost}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Travel_time </span>:
                    {Travel_time}
                  </p>
                  <p>
                    <span className="text-lg font-medium">
                      Total_Visitors_Per_Year{" "}
                    </span>{" "}
                    :{totaVisitorsPerYear} visitor
                  </p>
                </div>
                <div className="space-y-2 text-center lg:text-left">
                  <div className="border-b border-gray-300 pb-3">
                    <h2 className="text-xl font-extrabold">
                      Contact Information
                    </h2>
                  </div>
                  <p>
                    <span className="text-lg font-medium">Name</span> :
                    User_name
                  </p>
                  <p>
                    <span className="text-lg font-medium">Email</span> :
                    {User_email}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Location</span> :
                    {location}
                  </p>
                </div>
              </div>
              <button className="btn bg-[#ed5b31] text-white w-full mt-4">
                Booking Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewDetails;
