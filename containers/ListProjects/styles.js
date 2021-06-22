import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    transition: "0.25s",
    width: "95%",
    maxWidth: "1380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "4% 0",
  },
  categoryRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "4%",
    // height: "3rem",
  },
  categoryContainer: {
    width: "95%",
    maxWidth: "620px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "70%",
    },
  },
  categoryComponent: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 2.5rem",
    cursor: "pointer",
    color: theme.palette.grey[700],
    "& > p": {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: "center",
    },
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      "@media (hover:hover)": {
        backgroundColor: theme.palette.grey[400],
        color: theme.palette.grey[900],
      },
    },
  },
  categoryComponentActive: {
    backgroundColor: `${theme.palette.grey[400]} !important`,
    color: theme.palette.grey[900],
  },
  title: {
    marginBottom: "4%",
  },
  listEnter: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  listEnterActive: {
    opacity: 1,
    transform: "translate(0)",
    transition: "opacity 300ms, transform 300ms",
  },
  listExit: {
    opacity: "1",
  },
  listExitActive: {
    opacity: 0,
    transition: "opacity 300ms, transform 300ms",
  },
}));
export default useStyles;
