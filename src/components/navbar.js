import { useNavigate } from "react-router-dom";

function Navbar() {
  const naviate = useNavigate();
  return (
    <div className="navbar bg-warning">
      <div onClick={() => naviate("/")} className="left">
        <span>Net Movies App</span>
      </div>
      <div className="right">
        <select name="language" id="lan">
          <option value="en">En</option>
          <option value="ar">Ar</option>
        </select>
        <div className="ms-3">
          <span>&#10084;</span>watchlist
        </div>
      </div>
    </div>
  );
}

export default Navbar;
