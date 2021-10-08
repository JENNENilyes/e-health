import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { DropdownItem, NavLink  } from "reactstrap";
const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `http://localhost:3002/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    
    window.location = "/";
  };

  return (
    <NavLink tag="li" onClick={logout}>
    <DropdownItem className="nav-item">Log out</DropdownItem>
    </NavLink>


  );
};

export default Logout;