import { Link, useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

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
                text: "Your file has been deleted.",
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
      <div className="my-5">
        <h2 className="text-center my-4 text-3xl text-[#ed5b31]">Your Added Tourists Spot Data</h2>
        <div className="overflow-x-auto bg-orange-50 mx-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg font-semibold text-black">
                <th></th>
                <td>Tourists_spot_name</td>
                <td>County_name</td>
                <td>Average_cost</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {lists.map((list) => (
                <tr key={list._id} className="hover">
                  <th>1</th>
                  <td>{list.Tourists_spot_name}</td>
                  <td>{list.County_name}</td>
                  <td>{list.Average_cost}</td>
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
          </table>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-5">
        {currentList.map((list) => (
          <List key={list._id} list={list}></List>
        ))}
      </div> */}
    </div>
  );
};

export default MyList;
