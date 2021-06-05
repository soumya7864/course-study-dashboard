import React from "react";
import classes from "./ModuleDescription.module.css";

const ModuleDescription = (props) => {
  return (
    <div className={classes.ModuleDescription}>
      <div>
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        <h2>Session Plan</h2>
        {props.plans.map((plan) => (
          <li key={plan.id} className={classes.plans}>
            {plan.text}
          </li>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ModuleDescription;
