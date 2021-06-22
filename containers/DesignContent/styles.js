import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "95%",
    maxWidth: "1180px",
  },
  intro: {
    margin: "2rem 0",
    display: "flex",
    justifyContent: "center",
  },
  introTitle: {
    textAlign: "center",
  },
  thumbnailContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
