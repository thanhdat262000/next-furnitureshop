import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    maxHeight: "500px",
    "&:hover #serviceDetailTitle": {
      backgroundPosition: "-100% 100%",
    },
    "&:hover": {
      '@media (hover: hover)' : {
        cursor: "pointer",
        transform: "scale(1.01)",
        "& #overlay": {
          opacity: 1,
        },
      }
     
    },
    flexBasis: "22%",
    transition: "0.25s",
    textDecoration: "none",
    [theme.breakpoints.down(780)]: {
      width: "100%",
      flexBasis: "630px",
      maxHeight: "700px",
      marginBottom: "2rem",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
  },
  image: {
    flexBasis: "82%",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down(780)]: {
      // backgroundSize: "40% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.grey[800],
    },
  },
  title: {
    width: "100%",
    backgroundImage: `linear-gradient(90deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[900]} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    backgroundSize: "200%",
    transition: `background-position .5s ${theme.transitions.easing.easeInOut}`,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
  },
  overlay: {
    backgroundColor: fade(theme.palette.common.black, 0.3),
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "white",
    },
  },
  introRoot: {
    height: "100%",
    flexBasis: "22%",
    [theme.breakpoints.down(780)]: {
      flexBasis: "20%",
    },
  },
  introMainTitle: {
    marginBottom: "5%",
    display: "flex",
    alignItems: "center",
  },
  introBottom: {
    height: "50px",
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.9),
    width: "70%",
    transition: `0.5s ${theme.transitions.easing.easeInOut}`,
    color: "white",
    "& p": {
      marginLeft: "1.5rem",
    },
    "& svg": {
      marginRight: "1.5rem",
      color: "white",
      transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.primary.dark,
      "& svg": {
        marginRight: "1.25rem",
      },
    },
  },
}));
export default useStyles;
