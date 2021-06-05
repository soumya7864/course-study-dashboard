import React from "react";
import classes from "./Sidebar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/home-white.svg";
import ViewModuleIcon from "../../assets/module-white .svg";
import RecordVoiceOverIcon from "../../assets/instructors-white.svg";
import { withRouter } from "react-router";

const Sidebar = (props) => {
  let homeActive;
  let moduleActive;
  let instructorActive;

  if (useLocation().pathname === "/home") {
    homeActive = classes.homeActive;
  }
  if (useLocation().pathname === "/modules") {
    moduleActive = classes.moduleActive;
  }
  if (useLocation().pathname === "/instructors") {
    instructorActive = classes.instructorActive;
  }

  const homeActiveCss = `${classes.sidebarUlitemsHome} ${homeActive}`;
  const moduleActiveCss = `${classes.sidebarUlitemsModule} ${moduleActive}`;
  const instructorActiveCss = `${classes.sidebarUlitemsInstructor} ${instructorActive}`;

  return (
    <nav className={classes.nav}>
      <div className={classes.sidebarUl}>
        <NavLink exact to="/home" style={{ textDecoration: "none" }}>
          <div className={homeActiveCss}>
            <img src={HomeIcon} alt="home" className={classes.imgHome} />
            <p>HOME</p>
          </div>
        </NavLink>

        <div>
          <NavLink to="/modules" style={{ textDecoration: "none" }} exact>
            <div className={moduleActiveCss}>
              <img
                src={ViewModuleIcon}
                alt="module"
                className={classes.imgModule}
              />
              <p>MODULES</p>
            </div>
          </NavLink>
        </div>

        <div>
          <NavLink to="/instructors" style={{ textDecoration: "none" }} exact>
            <div className={instructorActiveCss}>
              <img
                src={RecordVoiceOverIcon}
                alt="instructor"
                className={classes.imgInstructor}
              />
              <p className={classes.instructor}>INSTRUCTOR</p>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Sidebar);
