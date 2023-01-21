function Info({place, condition, icon, degree}) {
  return (
    <>
      <div className="info-main">
        <div>
          <img src={icon} alt="Image Not Found" />
        </div>
        <div>
          <h1>{place}</h1>
          <h2>{degree}&#8451;</h2>
        </div>
      </div>
    </>
  );
}

export default Info