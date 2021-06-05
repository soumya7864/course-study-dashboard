import classes from "./CandidateCourseStat.module.css";
import { DUMMY_CANDIDATE_COURSE_STAT_DATA } from "../../../data/dummy_candidateCourseStat_data";

const CandidateCourseStat = (props) => {
  return (
    <div className={classes.CandidateCourseStat}>
      <h1>Today's Plan</h1>
      {DUMMY_CANDIDATE_COURSE_STAT_DATA.map((course) => (
        <div key={course.id}>
          <p className={classes.date}>{course.date}</p>
          <h2>{course.startCourse}</h2>
          <span>
            <p className={classes.quiz}>Quiz/Assignment</p>
            <p className={classes.time}>opens at {course.time}</p>
          </span>
        </div>
      ))}
      <div className={classes.footer}>
        <button onClick={() => (window.location.href = "/modules")}>
          Join Live Session
        </button>
        <p>SESSION IN PROGRESS</p>
      </div>
    </div>
  );
};

export default CandidateCourseStat;
