import { Link } from "react-router-dom";

const Country = ({ country }) => {
    console.log(country);
  const {
    _id,
    description,
    name,
    photo,
  } = country;
  return (
    <div>
      <div
        className="card  bg-base-100 shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <figure>
          <img src={photo} alt="Shoes" className="lg:h-72" />
        </figure>
        <div className="card-body">
          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-semibold">
              Country Name :{" "}
              <span className="text-base font-normal">
                {name}
              </span>
            </h3>
            <h3 className="text-lg font-semibold">
              Description :{" "}
              <span className="text-base font-normal">{description}</span>
            </h3>
            <Link
              to={`/countries/${_id}`}
              type="button"
              className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#ed5b31] text-white "
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
