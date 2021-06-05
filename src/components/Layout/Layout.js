import classes from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../TopBar/Topbar";

const Layout = (props) => {
  return (
    <div className={classes.mainDiv}>
      <Topbar />
      <div className={classes.containDiv}>
        <Sidebar />
        <main className={classes.main}>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
