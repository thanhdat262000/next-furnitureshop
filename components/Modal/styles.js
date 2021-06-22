import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    right: "0",
    zIndex: 300,
    width: "49%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down(780)]: {
      position: "relative",
      width: "100%",
      marginTop: "2rem",
    },
  },
  container: {
    margin: "7%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainContent: {
    marginTop: "5%",
  },
}));
export default useStyles;
