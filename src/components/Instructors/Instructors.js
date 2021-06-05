import React from "react";
import classes from "./Instructors.module.css";
import { INSTRUCTORS_DATA } from "../../data/dummy_instructor_data";

const Instructors = (props) => (
  <div className={classes.Instructors}>
    <h1 className={classes.title}>Instructors</h1>
    {INSTRUCTORS_DATA.map((instructor) => (
      <div
        key={instructor.id}
        className={classes.Instructor}
        onClick={props.clicked.bind("", instructor.id)}
      >
        <img src={instructor.image} alt="dp" />
        <div className={classes.innerDiv}>
          <h2>{instructor.name}</h2>
          <ul>
            {instructor.courses.map((item) => (
              <li key={item.id}>{item.course}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Instructors;
