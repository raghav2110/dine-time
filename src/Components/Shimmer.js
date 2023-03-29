import "../CSS/shimmer-component.css";
const Shimmer = () => {
  return (
    <div className="main-body">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
