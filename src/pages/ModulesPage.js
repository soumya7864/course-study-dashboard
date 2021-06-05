import React, { useState } from "react";
import Modules from "../components/Modules/Modules";
import ModuleDescription from "../components/Modules/ModuleDescription/ModuleDescription";
import classes from "./ModulesPage.module.css";
import { COURSES_DATA } from "../data/dummy_course_data";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const loadData = (
  <div className={classes.loadData}>
    <p>Select A Course To View About Course Data</p>
    <LoadingSpinner />
  </div>
);

const ModulesPage = (props) => {
  const [moduleId, setModuleId] = useState("");

  const onClickDescriptionChangeHandler = (childModuleId) => {
    setModuleId(childModuleId);
  };

  const moduleDescription = COURSES_DATA.find(
    (course) => course.id === moduleId
  );

  return (
    <div className={classes.ModulesPage}>
      <div className={classes.moduleItem}>
        <Modules clicked={onClickDescriptionChangeHandler} />
      </div>

      <div className={classes.moduleDescription}>
        {!moduleDescription && loadData}
        {moduleDescription && (
          <ModuleDescription
            id={moduleDescription.id}
            name={moduleDescription.name}
            icon={moduleDescription.icon}
            date={moduleDescription.date}
            plans={moduleDescription.plans}
          />
        )}
      </div>
    </div>
  );
};

export default ModulesPage;
