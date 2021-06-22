import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: "32%",
    boxShadow: theme.shadows[4],
    color: "black",
    textDecoration: "none",
    marginBottom: "2rem",
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      "@media (hover: hover)": {
        transform: "scale(1.03)",
      },
    },
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  thumbnailImage: {
    maxWidth: "100%",
    objectFit: "cover",
  },
  divider: {
    margin: "1rem 0",
    width: "20%",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontWeight: 900,
    marginBottom: "1rem",
  },
}));
export default useStyles;
