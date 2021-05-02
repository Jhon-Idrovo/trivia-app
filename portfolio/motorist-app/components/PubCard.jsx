function PubCard({ title, by, descendants, url, time }) {
  console.log(title);
  const date = new Date(time * 1000).toUTCString();
  const comments = descendants;
  return (
    <div className="bg-secondary m-8 p-2">
      <h3 className="font-bold text-txt-secondary ">{title}</h3>

      <p className="">
        By <span className="highlight">{by}</span> on{" "}
        <span className="highlight">{date}</span> comments{" "}
        <span className="highlight">{comments}</span>
      </p>
    </div>
  );
}

export default PubCard;
