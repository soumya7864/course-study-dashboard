import classes from "./CandidateAttendanceStat.module.css";
import Card from "../../../UI/Card/Card";
import ProgressBar from "@ramonak/react-progress-bar";
import { DUMMY_CANDIDATE_COURSE_STAT_DATA } from "../../../data/dummy_candidateCourseStat_data";

const CandidateAttendanceStat = (props) => {
  return (
    <Card>
      <div className={classes.CandidateAttendanceStat}>
        <h1>Progress Overview</h1>
        {DUMMY_CANDIDATE_COURSE_STAT_DATA.map((stat) => (
          <div key={stat.id} className={classes.mainDiv}>
            <div className={classes.overview}>
              <span>
                <p className={classes.overviewP}>{stat.overallGrade} %</p>
                <p className={classes.overviewOG}>Overall Grade</p>
              </span>
              <div className={classes.progressbar}>
                <ProgressBar
                  completed={stat.overallGrade}
                  isLabelVisible={false}
                  height={"12px"}
                  bgColor={"#155e29"}
                />
              </div>
            </div>
            <div className={classes.attendance}>
              <span>
                <p className={classes.attendanceP}>{stat.attendance} %</p>
                <p className={classes.attendanceA}>Attendance</p>
              </span>
              <div className={classes.progressbar}>
                <ProgressBar
                  completed={stat.attendance}
                  isLabelVisible={false}
                  height={"12px"}
                  bgColor={"#c40c0c"}
                />
              </div>
            </div>
          </div>
        ))}
        <p
          className={classes.CandidateAttendanceStatP}
          onClick={() => (window.location.href = "/modules")}
        >
          VIEW DETAILED PROGRESS
        </p>
      </div>
    </Card>
  );
};

export default CandidateAttendanceStat;
