import { useContext, useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:5000";

import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // post..........
  const addUser = async (data) => {
    // Make an HTTP POST request to the backend
    axios
      .post(`${URL}/add`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };
  const [update, setUpdate] = useState([]);

  const allUser = async () => {
    return await axios
      .get(`${URL}`)
      // .then((response) => {
      //   setFields(response.data);
      // })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchUser = async (searchTerm) => {
    return await axios
      .get(`${URL}/api/get`, { params: { searchTerm } })
      // .then((response) => setFields(response.data))
      .catch((error) => console.error("Error searching:", error));
  };

  const updateItem = async (id) => {
    id = id || "";
    return await axios.get(`${URL}/get/${id}`);
  };

  const deleteItem = (id) => {
    return axios
      .delete(`${URL}/delete/${id}`)
      .then((response) => {
        // Handle successful response
        console.log("Delete request successful");
        // Do any further processing or update the UI as needed
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting data", error);
        // Display an error message or perform any other error handling
      });
  };

  //edit user post

  const EditUser = async (id, data) => {
    axios
      .patch(`${URL}/${id}`, data)
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  // useEffect(() => {
  //   allUser();
  // }, [addUser]);
  return (
    <DataContext.Provider
      value={{
        addUser,
        // fields,
        update,
        allUser,
        updateItem,
        searchUser,
        EditUser,
        deleteItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DataContext);
};
