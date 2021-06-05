import React, { useState } from "react";
import Instructors from "../components/Instructors/Instructors";
import InstrcutorsDescription from "../components/Instructors/InstructorDescription/InstructorDescription";
import classes from "./InstructorPage.module.css";
import { INSTRUCTORS_DATA } from "../data/dummy_instructor_data";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const loadData = (
  <div className={classes.loadData}>
    <p>Select An Instructor To View About Instructor</p>
    <LoadingSpinner />
  </div>
);

const InstructorPage = (props) => {
  const [instructorId, setInstrcutorId] = useState("");

  const onClickDescriptionChangeHandler = (childInstructorId) => {
    setInstrcutorId(childInstructorId);
  };

  const instructorDescription = INSTRUCTORS_DATA.find(
    (course) => course.id === instructorId
  );

  return (
    <div className={classes.Instructors}>
      <div className={classes.instructorItem}>
        <Instructors clicked={onClickDescriptionChangeHandler} />
      </div>
      <div className={classes.instructorDescription}>
        {!instructorDescription && loadData}
        {instructorDescription && (
          <InstrcutorsDescription
            id={instructorDescription.id}
            name={instructorDescription.name}
            image={instructorDescription.image}
            students={instructorDescription.students}
            totalHours={instructorDescription.totalHours}
            courses={instructorDescription.courses}
            tagline={instructorDescription.tagline}
            about={instructorDescription.about}
          />
        )}
      </div>
    </div>
  );
};

export default InstructorPage;
