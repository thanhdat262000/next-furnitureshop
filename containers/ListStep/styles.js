import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    minHeight: "480px",
  },
  container: {
    margin: "4% 0",
    maxWidth: "1180px",
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
