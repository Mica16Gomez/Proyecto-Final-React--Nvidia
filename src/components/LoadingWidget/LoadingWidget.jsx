import "./LoadingWidget.css";

const LoadingWidget = () => {
  return (
    <>
      <div className="container-fluid loadingContainer">
        <div className="loader">
          <div className="circles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
          <div className="pacman">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingWidget;