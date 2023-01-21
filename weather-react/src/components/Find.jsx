import Search from "react-bootstrap-icons/dist/icons/search"

function Find({location}) {

  function handleKey(e) {
    if(e.key === "Enter"){
      console.log("Entering");
      location(e.target.value)
    }
  }

  return (
    <div className="find">
      <input type="text" placeholder="Find Location" className="inp" onKeyDown={handleKey}/>
      <Search />
    </div>
  );
}

export default Find