import { useState } from "react";
import "./App.css";
import Find from "./components/Find";
import Info from "./components/Info";
import axios from "axios"
function App() {
  const [location, setLocation] = useState(null);
  const [icon, setIcon] = useState(null)
  const [place, setPlace] = useState(null);
  const [degree, setDegree] = useState(null)

  if (location) {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=6cab56368ccc4c149ce181405232101&q=${location}`
      )
      .then(function (response) {
        setIcon(response.data.current.condition.icon)
        setPlace(response.data.location.name)
        setDegree(response.data.current.feelslike_c);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      }); 
  } else if (location === "") {
    setLocation(null);
  }

  return (
    <div className="App">
      {location ? <Info icon={icon} place={place} degree={degree} /> : <></>}
      <Find location={setLocation} />
      <a href="#">More Info</a>
    </div>
  );
}

export default App;

//https://api.weatherapi.com/v1/current.json?key=6cab56368ccc4c149ce181405232101&q=London
