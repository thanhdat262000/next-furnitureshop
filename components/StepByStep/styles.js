import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
    [theme.breakpoints.down(780)]: {
      flexBasis: "380px !important",
      width: "100%",
    },
  },
  basis: {
    flexBasis: "23%",
    [theme.breakpoints.down(780)]: {
      flexBasis: "15%",
    },
  },
  container: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover ": {
      "@media (hover:hover)": {
        "& #step-number": { backgroundPosition: "-100% 100%" },
        "& #step-button": {
          marginLeft: "0.25rem",
        },
      },
    },
  },
  step: {
    position: "absolute",
    left: "1.75rem",
    top: 0,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[900]} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    backgroundSize: "200%",
    transition: `background-position .5s ${theme.transitions.easing.easeInOut}`,
  },
  stepNumber: {
    color: "white",
    margin: "0.75rem",
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.25rem",
    },
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    boxShadow: theme.shadows[4],
    flexBasis: "70%",
  },
  stepContentContainer: {
    margin: "4rem 1.75rem 1.5rem 1.75rem",
  },
  stepContentTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: "0.75rem",
  },
  button: {
    cursor: "pointer",
    marginTop: "0.75rem",
    display: "flex",
    color: theme.palette.primary.main,
    "& svg": {
      marginLeft: "1rem",
    },
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
  },
}));
export default useStyles;
