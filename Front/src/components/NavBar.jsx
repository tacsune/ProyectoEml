import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Input, Collapse, Nav } from "reactstrap";
import { connect } from "react-redux";

const NavBar = (props) => {
  const [search, setSearch] = useState("");

  return (
    <Navbar color="dark" dark expand light>
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavLink className="navbar-brand" to="/usuarios">
            Usuarios
          </NavLink>
        </Nav>
        <Nav className="me-auto" navbar>
          <Input
            className="mx-3"
            type="text"
            placeholder="Búsqueda por nombre"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              props.setSearch(event.target.value);
            }}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      loading: state.view.loading,
    },
  };
};

export default connect(stateMapToProps, null)(NavBar);
