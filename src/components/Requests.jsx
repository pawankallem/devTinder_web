import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../constants";
import { addRequests, removeRequest } from "../utils/requestsSlice";
import { useEffect } from "react";

const RequestCard = ({ data, handleReviewRequest }) => {
  const { firstName, lastName, photoUrl, age, gender, bio } = data;
  return (
    <>
      <li className="list-row border border-gray-300">
        <div>
          <img className="size-40 rounded-box" src={photoUrl} />
        </div>
        <div className="list-col-grow">
          <div className="text-xl font-bold uppercase">
            {firstName} {lastName}{" "}
            <span className="text-sm font-semibold opacity-60">
              {gender} ({age})
            </span>
          </div>
          <div className="list-col-wrap text-lg">{bio}</div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleReviewRequest("rejected")}
            >
              Rejected
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleReviewRequest("accepted")}
            >
              Accepted
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

const Requests = () => {
  const dispatch = useDispatch();
  const requestsData = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(API_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(response.data.data));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleReviewRequest = async (_id, status) => {
    try {
      const response = await axios.post(
        `${API_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequest(_id));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className=" mb-[60px] w-[60%] m-auto overflow-y-auto h-full flex justify-center items-center">
      <ul className=" h-full w-full list bg-base-200 rounded-box shadow-md flex flex-col gap-5">
        {requestsData && requestsData.length > 0 ? (
          requestsData.map((requestData, index) => {
            return (
              <RequestCard
                key={requestData._id}
                data={requestData.fromUserId}
                handleReviewRequest={(e) =>
                  handleReviewRequest(requestData._id, e)
                }
              />
            );
          })
        ) : (
          <li className="text-5xl font-bold flex items-center justify-center h-full w-full">
            Currently no pending requests
          </li>
        )}
      </ul>
    </div>
  );
};

export default Requests;
