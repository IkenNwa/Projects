import SunFill from "react-bootstrap-icons/dist/icons/sun-fill"
function Info() {
  return (
    <>
      <div className="info-main">
        <div>
          <SunFill className="weather" />
        </div>
        <div>
          <h1>Abuja</h1>
          <h2>30&#8451;</h2>
        </div>
      </div>
    </>
  );
}

export default Info