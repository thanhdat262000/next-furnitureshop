import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    position: "absolute",
    top: "calc(50% - 37.5px)",
    right: (props) => (props.prev ? "calc(100% - 75px)" : 0),
    width: "75px",
    height: "75px",
    backgroundImage: `linear-gradient(90deg, ${fade(
      theme.palette.common.black,
      0.5
    )} 0%, ${fade(theme.palette.common.black, 0.5)} 50%, ${
      theme.palette.primary.main
    } 50%, ${theme.palette.primary.main} 100%)`,
    backgroundSize: "200%",
    transition: `background-position .2s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      "@media (hover: hover)": {
      backgroundPosition: (props) => (props.prev ? "-100% 100%" : "100% -100%"),
      },
    },
  },
  icon: {
    color: theme.palette.common.white,
    transform: (props) => (props.prev ? "rotateY(180deg)" : "none"),
  },
}));
export default useStyles;
