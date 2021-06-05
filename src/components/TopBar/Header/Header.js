import classes from "./Header.module.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Avatar from "../../../assets/avatar.svg";

const Header = () => {
  return (
    <div className={classes.Header}>
      <h1>EDYDV</h1>
      <div className={classes.innerDiv}>
        <NotificationsActiveIcon style={{ fontSize: 36, marginTop: 8 }} />
        <div className={classes.person}>
          <p>Hii John Doe!</p>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
