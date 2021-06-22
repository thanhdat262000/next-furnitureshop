import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "7% 0",
    position: "relative",
    maxWidth: "1180px",
    width: "95%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "60%",
    maxWidth: "700px",
    height: "900px",
    [theme.breakpoints.down(780)]: {
      maxWidth: "700px",
      width: "100%",
      backgroundPosition: "center center",
    },
  },
}));
export default useStyles;
