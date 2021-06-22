import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "590px",
    position: "relative",
  },
  imageContainer: {
    height: "560px",
    "& > div": {
      height: "100%",
      objectFit: "cover",
    },
  },
}));
export default useStyles;
