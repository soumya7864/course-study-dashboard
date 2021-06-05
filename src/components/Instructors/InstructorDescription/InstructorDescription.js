import React from "react";
import classes from "./InstructorDescription.module.css";
import Card from "../../../UI/Card/Card";
import Global from "../../../assets/global.png";
import LinkedIn from "../../../assets/linkedin.png";
import Github from "../../../assets/github.png";
import VideoImage from "../../../assets/intro-video-placeholder.jpg";

const InstructorDescription = (props) => (
  <div className={classes.InstructorDescription}>
    <Card>
      <div className={classes.upperMarginDiv}></div>
      <div className={classes.headerDiv}>
        <div className={classes.infoDiv}>
          <img src={props.image} alt="dp" className={classes.avatar} />
          <div className={classes.socialIcons}>
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Global} alt="Global" />
            <img src={Github} alt="Github" />
          </div>
        </div>
        <p id={props.id}>{props.name}</p>
        <img src={VideoImage} alt="videoImg" className={classes.videoImg} />
      </div>

      <div className={classes.statDiv}>
        <p className={classes.fixedText}>STATS</p>
        <div id={props.id} className={classes.statsInnerDiv}>
          <div className={classes.stats}>
            <h1>{props.totalHours}</h1>
            <p>Total Hours Taught</p>
          </div>
          <div className={classes.stats}>
            <h1>{props.students}</h1>
            <p>Students Taught</p>
          </div>
        </div>
      </div>

      <div className={classes.technicalDiv}>
        <p>TECHNICAL EXPERTISE</p>
        <div className={classes.courseContainer}>
          {props.courses.map((course) => (
            <div key={course.id} className={classes.coursesInfo}>
              <img src={course.icon} alt="icon" />
              <p>{course.course}</p>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ border: "1px solid #ccc", marginTop: 40 }} />

      <div id={props.id} className={classes.description}>
        <div className={classes.tagDiv}>
          <h1>TAGLINE</h1>
          <p>{props.tagline}</p>
        </div>
        <div className={classes.aboutDiv}>
          <h1>ABOUT</h1>
          <p>{props.about}</p>
        </div>
      </div>
    </Card>
  </div>
);

export default InstructorDescription;
