import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../constants";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      console.log("here : ", user);
      if (user) return;
      const response = await axios.get(API_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (error) {
      console.log("error : ", error);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);
  return (
    <div>
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Body;
