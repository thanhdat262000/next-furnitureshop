import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50px",
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.9),
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    color: "white",
    "& p": {
      marginLeft: "1.5rem",
    },
    "& svg": {
      marginLeft: "1.25rem",
      marginRight: "1.5rem",
      color: "white",
      transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.primary.dark,
      "& svg": {
        marginLeft: "1.5rem",
      },
      "@media (hover: none)": {
        backgroundColor: fade(theme.palette.primary.main, 0.9),
        "& svg": {
          marginLeft: "1.25rem",
        },
      },
    },
  },
}));
export default useStyles;
