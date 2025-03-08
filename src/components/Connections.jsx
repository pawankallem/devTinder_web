import axios from "axios";
import { API_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { useEffect } from "react";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsData = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    if (connectionsData) return;
    try {
      const response = await axios.get(API_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(response.data.data));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className=" w-[60%] m-auto overflow-y-auto h-full flex justify-center items-center">
      <ul className="h-full list bg-base-200 rounded-box shadow-md flex flex-col gap-5">
        {connectionsData && connectionsData.length > 0 ? (
          connectionsData.map((connectionData, index) => {
            return <ConnectionCard key={index} data={connectionData} />;
          })
        ) : (
          <h1 className="bg-gray-100 text-5xl font-bold flex items-center justify-center h-full w-full">
            There are No connections as of now :-(
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Connections;
