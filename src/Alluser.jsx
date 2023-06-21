import React, { useEffect, useState } from "react";
const URL = "http://localhost:5000";

import { useGlobalContext } from "./services/context";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Alluser() {
  const { searchUser, allUser, deleteItem } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [fields, setFields] = useState([]);
  // console.log(searchResults);
  const loadUser = async () => {
    // await setFields(response.data);
    const response = await allUser();
    setFields(response.data);
    //   const delresponse = await deleteItem(id);
    //   setFields(delresponse.data);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchResponse = await searchUser(searchTerm);
    setFields(searchResponse.data);
    // if (searchTerm === "") {
    //   window.location.reload();
    // }
  };
  const delItem = async (id) => {
    await deleteItem(id);
    loadUser();
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:w-[80%] w-[95%] mx-auto mt-5">
        <h1 className="text-center font-medium text-[2.5rem] text-blue-700 mb-5">
          All Users
        </h1>
        <form onSubmit={handleSearch} className="mb-5">
          <div className="mt-5 flex gap-5">
            <input
              className=" border-2 border-blue-500 rounded-md p-1"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-3 rounded-md">
              Search
            </button>
          </div>
        </form>
        <table className="w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs mx-auto text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" px-1 sm:px-2 py-3">
                id
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                FName
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                LName
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                City
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                State
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                Zip
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                Edit
              </th>
              <th scope="col" className=" px-1 sm:px-2 py-4">
                Delete
              </th>
            </tr>
          </thead>
          {fields.map((item, index) => {
            const { _id, fname, lname, city, state, zip } = item;
            return (
              <tbody key={_id}>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-1 sm:px-2 py-4">{index + 1}</td>
                  <td
                    scope="row"
                    className="px-1 sm:px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {fname}
                  </td>
                  <td className="px-1 sm:px-2 py-4">{lname}</td>
                  <td className="px-1 sm:px-2 py-4">{city}</td>
                  <td className="px-1 sm:px-2 py-4">{state}</td>
                  <td className="px-1 sm:px-2 py-4">{zip}</td>
                  <td className="px-1 sm:px-2 py-4">
                    <button>
                      {" "}
                      <Link
                        to={`/updateuser/${_id}`}
                        className="font-medium text-white p-2 rounded-[20%] bg-blue-700 hover:underline"
                      >
                        Edit
                      </Link>
                    </button>
                  </td>
                  <td className="px-1 sm:px-2 py-4">
                    <Button
                      to="#"
                      className="font-medium  hover:underline cursor-pointer text-[1.2rem]"
                      onClick={() => delItem(_id)}
                    >
                      <RiDeleteBinLine className="text-red-600 text-[1.2rem] " />
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Alluser;
