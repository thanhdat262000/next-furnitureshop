import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[900],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 500,
    transition: `0.5s ${theme.transitions.easing.easeInOut}`,
  },
  content: {
    width: "95%",
    display: "flex",
    maxWidth: "1180px",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  navLink: {
    marginTop: "45px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      // maxHeight: "80vh",
      // overflowY: "auto",
      // whiteSpace: "nowrap",
      // overflowX: "hidden",
      // marginBottom: "30px",
      // width: "100%",
      // flexDirection: "column",
      // justifyContent: "flex-start",
      // alignItems: "flex-start",
      // display: (props) => (props.open ? "flex" : "none"),
    },
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "18px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "18px",
    },
  },
  menuIcon: {
    color: "white",
    "& svg": {
      fontSize: 32,
    },
    // marginBottom: "30px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      // position: "absolute",
      // top: 0,
      // right: 0,
    },
  },
}));
export default useStyles;
