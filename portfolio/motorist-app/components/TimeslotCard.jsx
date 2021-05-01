function TimeslotCard({ time, motorists, handleClick, isSelected, index }) {
  return (
    <button
      className={`my-2 w-full py-2 card  ${isSelected ? "active" : "inactive"}`}
      onClick={() => handleClick(time, isSelected)}
      disabled={(motorists === 0) & !isSelected}
    >
      <h2 className=" m-auto ">{motorists}</h2>
      <h1>{time}</h1>
    </button>
  );
}

export default TimeslotCard;
