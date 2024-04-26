import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdatePost = () => {
  const post = useLoaderData();
  console.log(post);
  const {
    _id,
    User_name,
    User_email,
    Tourists_spot_name,
    Photo,
    totaVisitorsPerYear,
    Average_cost,
    Travel_time,
    Seasonality,
    location,
    short_description,
    County_name,
  } = post;

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Update data to the server
    fetch(`http://localhost:5000/addSpot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Post Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
    );
  };

  return (
    <div>
      <section className="p-6 bg-[#f4f3f0]">
        <h2 className="text-2xl font-semibold text-center">
          Update Your Post Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Tourists_spot_name</span>
                </div>
                <input
                  type="text"
                  name="spot"
                  defaultValue={Tourists_spot_name}
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
                  defaultValue={County_name}
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
                  defaultValue={location}
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
                  defaultValue={Average_cost}
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
                  defaultValue={Seasonality}
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
                  defaultValue={Travel_time}
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
                  defaultValue={totaVisitorsPerYear}
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
                  defaultValue={Photo}
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
                  defaultValue={short_description}
                  className="input input-bordered"
                  {...register("short_description")}
                />
              </label>
              <input
                type="submit"
                value="Update Tourists Spot"
                className="btn btn-block bg-[#d2b48c] col-span-full"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdatePost;
