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
  cardContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
  formContainer: {
    margin: "4% 0",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
  intro: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(780)]: {
      width: "100%",
    },
  },
  bigTitle: {
    fontWeight: 800,
    marginBottom: "2rem",
  },
  iconContainer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  link: {
    marginRight: "1rem",
  },
  callSupport: {
    flex: 1,
    borderRadius: "5px",
    padding: "0 1rem",
    height: "4rem",
    color: "white",
    textDecoration: "none",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default useStyles;
