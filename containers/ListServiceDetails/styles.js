import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1180px",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
}));
export default useStyles;
