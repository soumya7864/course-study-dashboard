import classes from "./MetaStrip.module.css";
import React, { useState } from "react";
import Progressbar from "@ramonak/react-progress-bar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const testDatas = (
  <div className={classes.testDatas}>
    <p>Select a Program</p>
    <ul>
      <li className={classes.firstTest}>TEST-010120</li>
      <li className={classes.remainTest}>TEST-020220</li>
      <li className={classes.remainTest}>TEST-030320</li>
    </ul>
  </div>
);

const MetaStrip = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandleChnage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <React.Fragment>
      <div className={classes.MetaStrip}>
        <div className={classes.allTests}>
          <div
            className={classes.testContainer}
            onClick={isVisibleHandleChnage}
          >
            <p>TEST-010120</p>
            {!isVisible && (
              <ArrowDropDownIcon style={{ fontSize: 40, marginTop: 24 }} />
            )}
            {isVisible && (
              <ArrowDropUpIcon style={{ fontSize: 40, marginTop: 20 }} />
            )}
          </div>
        </div>
        <h2>Full Stack Developer Program</h2>
        {!isVisible && (
          <div className={classes.Progressbar}>
            <p>38%</p>
            <Progressbar completed={38} bgColor={"#83cdde"} />
          </div>
        )}
      </div>
      <div className={classes.dummyTest}>{isVisible && testDatas}</div>
    </React.Fragment>
  );
};

export default MetaStrip;
