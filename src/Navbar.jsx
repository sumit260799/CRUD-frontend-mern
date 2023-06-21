import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="gap-5">
        <Link to="/">sumit</Link>
        <Link to="/alluser">All users</Link>
        <Link to="/adduser">Add users</Link>
        {/* <Link to="/updateuser">Update user</Link> */}
      </Toolbar>
    </AppBar>
  );
}
