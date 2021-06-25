import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="white">
        <NavbarBrand className="text-dark font-weight-bold mx-auto">
          <h4>CHECK ANY CITY WEATHER</h4>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
