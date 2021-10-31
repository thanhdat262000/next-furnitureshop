import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "black",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[200],
    height: "7rem",
    cursor: "pointer",
    transition: `0.1s ${theme.transitions.easing.easeOut}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "& p": {
        transform: "translateX(-0.5rem)",
      },
      "& svg": {
        transform: "translateX(0.5rem)",
      },
    },
  },
  container: {
    width: "95%",
    maxWidth: "600px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    transition: `0.25s ${theme.transitions.easing.easeOut}`,
    fontWeight: theme.typography.fontWeightMedium,
  },
  svg: {
    transition: `0.25s ${theme.transitions.easing.easeOut}`,
  },
}));
export default useStyles;
