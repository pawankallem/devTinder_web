import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { API_URL } from "../constants";

const EditProfile = () => {
  const userData = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bio, setBio] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setAge(userData.age || "");
      setGender(userData.gender || "");
      setPhotoUrl(userData.photoUrl || "");
      setBio(userData.bio || "");
    }
  }, [userData]);

  const handleClear = () => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setAge(userData.age || "");
      setGender(userData.gender || "");
      setPhotoUrl(userData.photoUrl || "");
      setBio(userData.bio || "");
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        API_URL + "/profile/edit",
        { firstName, lastName, age, gender, photoUrl, bio },
        { withCredentials: true }
      );

      console.log("response : ", response);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="border-2 w-full h-full flex justify-center items-center border-red-200 gap-10 p-10">
      <div className="h-[70%] flex justify-center items-center">
        {userData && (
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-5 rounded-box">
            <label className="card-title m-auto text-[24px]">
              Edit Profile
            </label>

            <label className="fieldset-label">First Name</label>
            <input
              type="text"
              className="input"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="fieldset-label">Last Name</label>
            <input
              type="text"
              className="input"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label className="fieldset-label">Enter Your Age</label>
            <input
              type="number"
              className="input"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />

            <label className="fieldset-label">Select Gender</label>
            <select
              value={gender}
              className="select select-neutral"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>

            <label className="fieldset-label">Photo URL</label>
            <input
              type="text"
              className="input"
              value={photoUrl}
              placeholder="Photo URL"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />

            <label className="fieldset-label">About Your Bio</label>
            <textarea
              className="textarea h-24"
              value={bio}
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>

            <div className="flex gap-5 justify-center items-center w-full h-full mt-4">
              <button
                onClick={handleClear}
                className="btn btn-neutral h-[40px] w-[150px]"
              >
                Clear
              </button>
              <button
                onClick={handleSave}
                className="btn btn-success h-[40px] w-[150px]"
              >
                Save
              </button>
            </div>
          </fieldset>
        )}
      </div>
      <div>
        <UserCard
          usedFor={"editProfile"}
          user={{ firstName, lastName, age, gender, photoUrl, bio }}
        />
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Edited Sucessfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
