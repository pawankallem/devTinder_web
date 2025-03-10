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
      if (user) return;
      const response = await axios.get(API_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (error) {
      console.log("error 111111111111 : ", error);
      navigate("/login");
      if (error.status === 401) {
        console.log("unauth : ")
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="h-[6%] ">
        <NavBar />
      </div>

      <div className="h-[88%] overflow-hidden">
        <Outlet />
      </div>
      <div className="h-[6%] ">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
