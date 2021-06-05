import React from "react";
import classes from "./Modules.module.css";
import { COURSES_DATA } from "../../data/dummy_course_data";

const Modules = (props) => {
  return (
    <div className={classes.Modules}>
      <h1>Modules</h1>
      {COURSES_DATA.map((module) => (
        <div
          key={module.id}
          className={classes.ModuleItem}
          onClick={props.clicked.bind("", module.id)}
        >
          <img src={module.icon} alt="icon" />
          <h2>{module.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default Modules;
