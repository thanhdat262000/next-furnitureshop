import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "20px",
    bottom: "30px",
    zIndex: 1000,
  },
  "@keyframes swing": {
    "0%": { transform: "rotate(0deg)" },
    "25%": { transform: "rotate(15deg)" },
    "50%": {
      transform: "rotate(0deg)",
    },
    "75%": { transform: "rotate(-15deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
  icon: {
    animation: "$swing 0.75s ease-in-out infinite",
  },
}));
export default useStyles;
