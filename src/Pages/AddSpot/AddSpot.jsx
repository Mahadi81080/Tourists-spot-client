import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddSpot = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Send data to the server
    fetch("http://localhost:5000/addSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee item added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
    );
  };

  return (
    <div className="mx-10 my-5">
      <Helmet>
        <title>Add_Tourists_Spot</title>
      </Helmet>
      <section className="p-6 bg-[#f4f3f0] rounded-xl">
        <h2
          className="md:text-2xl lg:text-3xl font-semibold text-center "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          _____ Add Tourists Spot ______
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <fieldset className=" p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">User_name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered "
                  {...register("User_name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">User_email</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered "
                  {...register("User_email")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Tourists_spot_name</span>
                </div>
                <input
                  type="text"
                  name="spot"
                  placeholder="Enter_spot_name"
                  className="input input-bordered "
                  {...register("Tourists_spot_name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">County_name</span>
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country name"
                  className="input input-bordered "
                  {...register("County_name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Location</span>
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  className="input input-bordered "
                  {...register("location")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Average_cost</span>
                </div>
                <input
                  type="text"
                  name="cost"
                  placeholder="Enter average cost"
                  className="input input-bordered "
                  {...register("Average_cost")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Seasonality</span>
                </div>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Enter seasonality"
                  className="input input-bordered "
                  {...register("Seasonality")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Travel_time</span>
                </div>
                <input
                  type="text"
                  name="time"
                  placeholder="Enter travel time"
                  className="input input-bordered "
                  {...register("Travel_time")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">totaVisitorsPerYear</span>
                </div>
                <input
                  type="text"
                  name="visitor"
                  placeholder="Enter total visitor"
                  className="input input-bordered "
                  {...register("totaVisitorsPerYear")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter coffee photo"
                  className="input input-bordered "
                  {...register("Photo")}
                />
              </label>
              <label className="form-control col-span-full">
                <div className="label">
                  <span className="label-text">short_description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter spot description"
                  className="input input-bordered"
                  {...register("short_description")}
                />
              </label>
              <input
                type="submit"
                value="Add Tourists Spot"
                className="btn btn-block bg-[#d2b48c] col-span-full"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddSpot;
