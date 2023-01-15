import Search from "react-bootstrap-icons/dist/icons/search"

function Find() {
  return (
    <div className="find">
      <input type="text" placeholder="Find Location" className="inp" />
      <Search />
    </div>
  );
}

export default Find