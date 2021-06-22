import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[900],
  },
  container: {
    margin: "5% 0",
    width: "95%",
    maxWidth: "1180px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
