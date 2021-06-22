import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > div": {
      width: "50px",
      marginRight: "1.5rem",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
    },
    "& p": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      "& p": {
        fontSize: "0.75rem",
      },
    },
  },
}));
export default useStyles;
