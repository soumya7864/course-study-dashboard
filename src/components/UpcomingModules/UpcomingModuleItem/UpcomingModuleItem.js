import React from "react";
import classes from "./UpcomingModuleItem.module.css";
import Card from "../../../UI/Card/Card";

const UpcomingModuleItem = (props) => {
  return (
    <div className={classes.UpcomingModuleItem}>
      {props.modules.map((module) => (
        <div
          key={module.id}
          style={{ paddingRight: "40px", paddingLeft: "35px" }}
        >
          <Card>
            <div className={classes.introDiv}>
              <img src={module.icon} alt="icon" />
              <div className={classes.introDivName}>
                <p>{module.name}</p>
                <div className={classes.innerDiv}>
                  <img src={module.avatar} alt="avatar" />
                  <p>{module.instructor}</p>
                </div>
              </div>
            </div>
            <div className={classes.statDiv}>
              <div>
                <p className={classes.statDivContent}>{module.weeks}</p>
                <p className={classes.statDivText}>Weeks</p>
              </div>
              <div>
                <p className={classes.statDivContent}>{module.assignments}</p>
                <p className={classes.statDivText}>Assignments</p>
              </div>
              <div>
                <p className={classes.statDivContent}>{module.quiz}</p>
                <p className={classes.statDivText}>MCQ Quiz</p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UpcomingModuleItem;
