import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", color:"black" }}>
      { <img src={require('../images/logo1.png')} alt="logo" height={45} /> }
      {/* <h1>Home</h1> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
