import MetaStrip from "./MetaStrip/MetaStrip";
import Header from "./Header/Header";
import React from "react";

const Topbar = () => {
  return (
    <React.Fragment>
      <Header />
      <MetaStrip />
    </React.Fragment>
  );
};

export default Topbar;
