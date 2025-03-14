import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import { clearFeed } from "../utils/feedSlice";
import { clearRequests } from "../utils/requestsSlice";
import { clearConnections } from "../utils/connectionSlice";
import { clearUser } from "../utils/userSlice";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(API_URL + "/logout", {}, { withCredentials: true });
      dispatch(clearUser());
      dispatch(clearFeed());
      dispatch(clearRequests());
      dispatch(clearConnections());
      navigate("/login");
    } catch (error) {
      console.log("error : ", error);
      navigate("/login");
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-[28px] h-[28px] rounded-[50%]" src={logo} alt="" />
          DevTinder
        </Link>
      </div>
      {user && (
        <div className="flex gap-2">
          <div className="border-1 text-xl text-orange-300 font-semibold ">
            Welcome {user.firstName}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <Link to="/profile/view" className="justify-between">
                  Profile
                </Link>
              </li> */}
              <li>
                <Link to="/profile/edit" className="justify-between">
                  Edit Prfile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="justify-between">
                  Request
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
