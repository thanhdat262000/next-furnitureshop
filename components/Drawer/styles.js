import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
  },
  drawer: {
    "& .MuiPaper-root": {
      minWidth: "20rem",
      color: "white",
      backgroundColor: "#222",
    },
  },
  nested: {
    marginLeft: "1rem",
  },
  link: {
    textTransform: "uppercase",
    "&:hover": {
      "@media (hover: hover)": {
        backgroundColor: theme.palette.primary.main,
        color: fade(theme.palette.common.white, 0.8),
      },
    },
  },
  linkText: {
    color: "white",
    textDecoration: "none",
  },
  onMenuClick: {
    backgroundColor: theme.palette.primary.main,
    color: fade(theme.palette.common.white, 0.8),
  },
}));
export default useStyles;
