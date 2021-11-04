import { fade, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "&:hover #project-overlay": {
      "@media (hover:hover)": {
        height: "100%",
        opacity: 1,
      },
    },
    transition: "0.25s",
  },
  container: {
    width: "100%",
    minHeight: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    width: "100%",
    height: 0,
    backgroundColor: fade(theme.palette.common.black, 0.4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.25s",
  },
  projectType: {
    color: theme.palette.grey[300],
    ...theme.typography.overline,
    letterSpacing: "0.25rem",
  },
  projectName: {
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => (props.category ? "black" : "white"),
    marginTop: (props) => (props.category ? "0.5rem" : 0),
    width: "80%",
  },
  projectEnter: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  projectEnterActive: {
    opacity: 1,
    transform: "translate(0)",
    transition: "opacity 300ms, transform 300ms",
  },
  projectExit: {
    opacity: "1",
  },
  projectExitActive: {
    opacity: 0,
    transition: "opacity 300ms, transform 300ms",
  },
}));
export default useStyles;
