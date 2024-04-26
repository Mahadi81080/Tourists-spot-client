import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
    console.log(spot);
  const {
    _id,
    Tourists_spot_name,
    Photo,
    totaVisitorsPerYear,
    Average_cost,
    Travel_time,
    Seasonality,
  } = spot;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={Photo} alt="Shoes" className="h-72" />
      </figure>
      <div className="card-body">
        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-semibold">
            Tourists_spot_name :{" "}
            <span className="text-base font-normal">{Tourists_spot_name}</span>
          </h3>
          <h3 className="text-lg font-semibold">
            Average_cost :{" "}
            <span className="text-base font-normal">{Average_cost}</span>
          </h3>
          <h3 className="text-lg font-semibold">
            Total_Visitors_Per_Year :{" "}
            <span className="text-base font-normal">
              {totaVisitorsPerYear} visitor
            </span>
          </h3>
          <h3 className="text-lg font-semibold">
            Travel_time :{" "}
            <span className="text-base font-normal">{Travel_time}</span>
          </h3>
          <h3 className="text-lg font-semibold">
            Seasonality :{" "}
            <span className="text-base font-normal">{Seasonality}</span>
          </h3>
          <Link
            to={`/addSpot/${_id}`}
            type="button"
            className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#ed5b31] text-white "
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
