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
    "& img": {
      maxWidth: "100%",
    },
  },
}));
export default useStyles;
