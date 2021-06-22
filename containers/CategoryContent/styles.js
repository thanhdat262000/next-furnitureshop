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
  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "3rem 0",
  },
  title: {
    textTransform: "uppercase",
  },
  categoryContainer: {
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
  },
}));
export default useStyles;
