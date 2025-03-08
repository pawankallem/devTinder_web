const UserCard = ({ user, usedFor = "" }) => {
  const { firstName, lastName, age, gender, photoUrl = "", bio } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-purple-100 border-2 rounded-[15px] overflow-hidden">
      <figure>
        <img src={photoUrl ? photoUrl : null} alt="userCard" />
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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
