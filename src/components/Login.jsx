import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        API_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data.data));
      navigate("/");
    } catch (error) {
      console.log("error : ", error);
    }
  };
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        API_URL + "/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data.data));
      navigate("/profile/edit");
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex items-center justify-center">
      <div className="w-[300px]  card bg-neutral text-neutral-content w-96">
        <div className=" border border-red-200 card-body items-center text-center">
          <h2 className="card-title">{isLogin ? "Login " : "Signup"} </h2>

          <fieldset className="  fieldset w-xs  border border-base-300 bg-neutral text-neutral-content p-4 rounded-box">
            {!isLogin && (
              <>
                <label className="fieldset-label text-neutral-content">
                  First Name
                </label>
                <input
                  type="text"
                  className="input text-zinc-800"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="fieldset-label text-neutral-content">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input text-zinc-800"
                  placeholder="Enter your Email"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )}
            <label className="fieldset-label text-neutral-content">Email</label>
            <input
              type="text"
              className="input text-zinc-800"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="fieldset-label text-neutral-content">
              Password
            </label>
            <input
              type="text"
              className="input text-zinc-800"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className=" mt-5 underline text-blue-200"
            onClick={() => setIsLogin(!isLogin)}
          >
            Click here for {isLogin ? "Signup" : "Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
