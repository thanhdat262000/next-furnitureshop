import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formContainer: {
    width: "95%",
    maxWidth: "1180px",
    margin: "4% auto",
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
    fontWeight: 700,
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
  listInfor: {
    paddingLeft: "14px",
    margin: 0,
  },
  divider: {
    margin: "1rem 0",
  },
}));
export default useStyles;
