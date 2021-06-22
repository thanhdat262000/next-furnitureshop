import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    margin: "2rem 0",
    width: "95%",
    maxWidth: "1180px",
    display: "flex",
    justifyContent: "space-between",
  },
  section1: {
    flexBasis: "65%",
  },
  mainTitle: { margin: "0.75rem 0" },
  subTitle: {
    color: theme.palette.grey[900],
    fontWeight: 900,
    margin: "0.75rem 0",
  },
  content: { color: theme.palette.grey[700], margin: "0.75rem 0" },
}));
export default useStyles;
