import React, { useState } from "react";
import classes from "./UpcomingModule.module.css";
import { DUMMY_UPCOMING_MODULE } from "../../data/dummy_upcomingModule_data";
import UpcomingModuleItem from "../UpcomingModules/UpcomingModuleItem/UpcomingModuleItem";
import Pagination from "../../components/Pagination/Pagination";

const UpcomingModule = (props) => {
  //   const [posts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modulesPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * modulesPerPage;
  const indexOfFirstPost = indexOfLastPost - modulesPerPage;
  const currentPosts = DUMMY_UPCOMING_MODULE.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.UpcomingModule}>
      <h1>Upcoming Modules</h1>
      <div className={classes.UpcomingModuleItems}>
        <UpcomingModuleItem modules={currentPosts} />
      </div>
      <div className={classes.paginate}>
        <Pagination
          postsPerPage={modulesPerPage}
          totalPosts={DUMMY_UPCOMING_MODULE.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default UpcomingModule;
