import classes from "./CandidateStat.module.css";
import CandidateCourseStat from "../CandidateStat/CandidateCourseStat/CandidateCourseStat";
import Card from "../../UI/Card/Card";
import { DUMMY_CANDIDATE_COURSE_STAT_DATA } from "../../data/dummy_candidateCourseStat_data";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const CandidateStat = (props) => {
  return (
    <div className={classes.divContainer}>
      <h1>Continue Learning</h1>
      <p
        onClick={() => (window.location.href = "/modules")}
        className={classes.view}
      >
        VIEW MODULE DETAILS
      </p>

      <div className={classes.CandidateStat}>
        <Card>
          <div style={{ display: "flex" }}>
            <div className={classes.leftContainer}>
              {DUMMY_CANDIDATE_COURSE_STAT_DATA.map((course) => (
                <div key={course.id}>
                  <div className={classes.upperDiv}>
                    <img
                      className={classes.icon}
                      src={course.icon}
                      alt="icon"
                    />
                    <div className={classes.nameDiv}>
                      <p>{course.course}</p>
                      <div className={classes.innerDiv}>
                        <img
                          className={classes.avatar}
                          src={course.avatar}
                          alt="avatar"
                        />
                        <p
                          style={{
                            marginTop: "5px",
                            fontWeight: 600,
                            color: "blue",
                          }}
                        >
                          {course.intructor}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 32 }}>
                    <div className={classes.progress}>
                      <p className={classes.progP}>Progress</p>
                      <div className={classes.statProgbar}>
                        <p>{course.progress}%</p>
                        <div className={classes.progressbar}>
                          <ProgressBar
                            completed={course.progress}
                            isLabelVisible={false}
                            bgColor={"#29bac4"}
                            height={"12px"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={classes.liveSession}>
                      <p className={classes.progP}>Live Session</p>
                      <div className={classes.statProgbar}>
                        <p>{course.liveSession}</p>
                        <div className={classes.progressbar}>
                          <ProgressBar
                            completed={course.liveSessionNum}
                            isLabelVisible={false}
                            bgColor={"#29bac4"}
                            height={"12px"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={classes.assignments}>
                      <p className={classes.progP}>Assignments</p>
                      <div className={classes.statProgbar}>
                        <p>{course.assignments}</p>
                        <div className={classes.progressbar}>
                          <ProgressBar
                            completed={course.assignmentsNum}
                            isLabelVisible={false}
                            bgColor={"#29bac4"}
                            height={"12px"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={classes.quiz}>
                      <p className={classes.progP}>MCQ Quiz</p>
                      <div className={classes.statProgbar}>
                        <p>{course.quiz}</p>
                        <div className={classes.progressbar}>
                          <ProgressBar
                            completed={parseInt(course.quizNum, 10)}
                            isLabelVisible={false}
                            bgColor={"#29bac4"}
                            height={"12px"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CandidateCourseStat />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CandidateStat;
