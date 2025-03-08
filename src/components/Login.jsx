import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("linus@gmail.com");
  const [password, setPassword] = useState("Linus@123");
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

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login Here</h2>

          <fieldset className="fieldset w-xs  border border-base-300 bg-neutral text-neutral-content p-4 rounded-box">
            <label className="fieldset-label text-neutral-content">Title</label>
            <input
              type="text"
              className="input text-zinc-800"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="fieldset-label text-neutral-content">Slug</label>
            <input
              type="text"
              className="input text-zinc-800"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
