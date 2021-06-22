import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[100],
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    // maxHeight: "200px",
    minHeight: "130px",
    width: "95%",
    maxWidth: "1180px",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
