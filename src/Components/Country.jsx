import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { _id, description, name, photo } = country;
  return (
    <Link to='/allSpot'>
      <div className="card card-side bg-[#f5f4f1] shadow-xl my-3">
        <figure>
          <img src={photo} alt="Movie" className="h-full" />
        </figure>
        <div className=" flex justify-between w-full pr-3 py-3">
          <div className="mt-6 pl-3 space-y-3">
            <h3 className="text-lg font-semibold">
              Name : <span className="text-base font-normal">{name}</span>
            </h3>
            <h3 className="text-lg font-semibold">
              description :{" "}
              <span className="text-base font-normal">{description}</span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
