import axios from "axios";
import { API_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user, usedFor = "" }) => {
  const { _id, firstName, lastName, age, gender, photoUrl = "", bio } = user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status) => {
    try {
      const response = await axios.post(
        `${API_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeFeed(_id));
    } catch (error) {
      console.log("error : ", error);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-purple-100 border-2 rounded-[15px] overflow-hidden">
      <figure>
        <img
          className="h-full w-full"
          src={photoUrl ? photoUrl : null}
          alt="userCard"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <div>
          {" "}
          {gender} ( {age} )
        </div>
        <p>{bio}</p>

        {usedFor !== "editProfile" && (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored")}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested")}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
