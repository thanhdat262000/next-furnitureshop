import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "inherit",
    textDecoration: "none",
    color: "black",
    flexBasis: "25%",
    "&:hover": {
      "@media (hover: hover)": {
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[3],
        "& > div": {
          margin: "6% calc(3% - 0.2rem) 6% calc(3% + 0.2rem )",
        },
      },
    },
    transition: "0.25s 0.1s",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
    [theme.breakpoints.down(780)]: {
      justifyContent: "flex-start",
      width: "100%",
      padding: "0.5rem 0",
    },
    // "@media (hover: none)": {
    //   backgroundColor: "inherit",
    //   "& > div": {
    //     margin: "6% 3%",
    //   },
    // },
  },
  content: {
    transition: "0.25s 0.1s",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "6% 3%",
    [theme.breakpoints.down(780)]: {
      width: "100%",
    },
  },
  icon: {
    flexBasis: "30%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    "& svg": { fontSize: 50 },
    [theme.breakpoints.down("sm")]: {
      "& svg": { fontSize: 38 },
    },
    [theme.breakpoints.down(780)]: {
      justifyContent: "flex-start",
      flexBasis: "15%",
    },
  },
  title: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleMain: {
    ...theme.typography.h6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  titleContent: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& svg": {
      marginLeft: "0.5rem",
    },
  },
}));
export default useStyles;
