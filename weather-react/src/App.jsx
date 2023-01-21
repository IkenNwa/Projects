import { useState } from 'react'
import './App.css'
import Find from './components/Find'
import Info from './components/Info'

function App() {

  const [location, setLocation] = useState(null)

  
  
  if(location) {
    console.log(location);
  }else if(location === "") {
   setLocation(null)
  }

  return (
    <div className="App">
      {location ? (<Info />) : <></>}
      <Find location={setLocation} />
      <a href="#">More Info</a>
    </div>
  )
}

export default App
