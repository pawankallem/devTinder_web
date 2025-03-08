const ConnectionCard = ({ data }) => {
  const { firstName, lastName, photoUrl, age, gender, bio } = data;
  return (
    <>
      <li className="list-row border border-gray-300">
        <div>
          <img className="size-40 rounded-box" src={photoUrl} />
        </div>
        <div className="list-col-grow">
          <div className="text-xl font-bold uppercase">
            {firstName} {lastName}
          </div>
          <div className="text-sm font-semibold opacity-60">
            {gender} ({age})
          </div>
          <div className="list-col-wrap text-lg">{bio}</div>
        </div>
      </li>
    </>
  );
};

export default ConnectionCard;
