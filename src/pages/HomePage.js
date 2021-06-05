import React from "react";
import classes from "./HomePage.module.css";
import CandidateCourseStat from "../components/CandidateStat/CandidateStat";
import CandidateAttendanceStat from "../components/CandidateStat/CandidateAttendanceStat/CandidateAttendanceStat";

import UpcomingModule from "../components/UpcomingModules/UpcomingModule";

const HomePage = (props) => {
  return (
    <div className={classes.HomePage}>
      <div className={classes.candiadteItem}>
        <div className={classes.leftContent}>
          <CandidateCourseStat />
        </div>
        <div className={classes.candidateAttend}>
          <CandidateAttendanceStat />
        </div>
      </div>
      <div className={classes.upcomingModule}>
        <UpcomingModule />
      </div>
    </div>
  );
};

export default HomePage;
