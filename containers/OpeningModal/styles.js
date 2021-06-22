import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "560px",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.grey[50],
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "885px",
  },
  subTitle: {
    color: theme.palette.grey[400],
    fontWeight: 700,
    textTransform: "uppercase",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  divider: {
    height: "0.1rem",
    width: "3.5rem",
    backgroundColor: theme.palette.grey[400],
    margin: "1rem 0",
  },
  content: {
    color: theme.palette.grey[300],
  },
}));
export default useStyles;
