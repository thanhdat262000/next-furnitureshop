import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    bottom: "1.5rem",
    zIndex: 20,
    backgroundColor: "white",
    width: "32%",
    boxShadow: theme.shadows[6],
    height: "12rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      "@media (hover:hover)": {
        "& h6": {
          color: theme.palette.primary.main,
        },
      },
    },
    [theme.breakpoints.down(780)]: {
      width: "100%",
      marginBottom: "2rem",
    },
  },
  container: {
    display: "flex",
    height: "65%",
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "& svg": {
      fontSize: "3rem",
      color: theme.palette.primary.main,
      [theme.breakpoints.between(780, "sm")]: {
        fontSize: "2.5rem",
      },
    },
    "& p": {
      color: theme.palette.grey[700],
    },
  },
}));
export default useStyles;
