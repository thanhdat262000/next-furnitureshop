import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "23%",
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0'
    }
  },
  container: {
    width: "100%",
    height: "100%",
  },
  navLink: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "0.5rem",
    "& svg": {
      fontSize: 16,
      marginRight: "0.25rem",
    },
    "&:hover": {
      color: theme.palette.common.white,
    },
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
  },
  title: {
    marginBottom: "1rem",
  },
  navLinkContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dividerColor: {
    backgroundColor: fade(theme.palette.primary.main, 0.5),
  },
}));
export default useStyles;
