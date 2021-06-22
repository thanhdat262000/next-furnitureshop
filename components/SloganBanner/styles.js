import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: "1rem 0",
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    maxWidth: "1180px",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
  slogan: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(780)]: {
      width: "100%",
      margin: "1rem 0",
    },
  },
}));
export default useStyles;
