import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

const Drawer = () => {
  const links = [{ to: "/", label: "Список тестов", exact: true }];

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };


  return (
    <React.Fragment>
      <nav className={classes.Menu}>
        <ul>{renderLinks()}</ul>
      </nav>
    </React.Fragment>
  );
};

export default Drawer;
