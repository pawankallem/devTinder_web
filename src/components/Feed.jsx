import { useEffect } from "react";
import { API_URL } from "../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const fetchFeed = async () => {
    if (feedData) return;
    try {
      const response = await axios.get(API_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(response.data.data));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="flex justify-center items-center border-2 h-full w-full">
      {feedData ? (
        <UserCard usedFor="feed" user={feedData[0]} />
      ) : (
        <h1>No New User</h1>
      )}
    </div>
  );
};

export default Feed;
