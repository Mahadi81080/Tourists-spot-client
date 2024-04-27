import { Link, useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);

  const myLists = useLoaderData();
  const currentUserEmail = user.email;
  const currentList = myLists.filter(
    (item) => item.User_email === currentUserEmail
  );
  const [lists, setLists] = useState(currentList);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remaining = lists.filter((list) => list._id !== _id);
              setLists(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>My_List</title>
      </Helmet>
      <div className="my-5 mx-10 min-h-screen">
        <h2 className="text-center my-8 md:texl-2xl lg:text-3xl text-black font-semibold ">
          Your Added Tourists Spot Data
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base font-semibold text-black">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Tourists Spot</th>
                <th>Average_cos</th>
                <th> Total_Visitors_Per_Year</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {lists.map((list) => (
                <tr key={list._id} className="hover" data-aos="fade-right"
                data-aos-duration="2000">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={list.Photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {list.Tourists_spot_name}
                        </div>
                        <div className="text-sm opacity-50">
                          {list.County_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{list.Average_cost}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {list.totaVisitorsPerYear} viewer
                    </span>
                  </td>
                  <td>
                    <Link to={`/updatePost/${list._id}`}>
                      <button className="btn bg-black text-white">
                        <MdEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(list._id)}
                      className="btn  bg-red-500 text-white"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr >
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Tourists Spot</th>
                <th>Average_cos</th>
                <th> Total_Visitors_Per_Year</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
