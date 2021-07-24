import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    margin: "2rem 0",
    width: "95%",
    maxWidth: "1180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: "150px",
    margin: "0.75rem 0",
  },
  subSection1: {
    position: "relative",
    flexBasis: "38%",
    height: "100%",
    minHeight: "175px",
  },
  subSection2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexBasis: "59%",
    height: "100%",
  },
  mainTitle: { margin: "0.75rem 0" },
  subTitle: {
    color: theme.palette.grey[900],
    fontWeight: 900,
    margin: "0.75rem 0",
  },
  subTitle2: {
    color: theme.palette.grey[900],
    fontWeight: 900,
  },
  reverseSection: {
    flexDirection: "row-reverse",
  },
  phiContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "0.75rem",
  },
  phiSubSection: {
    flexBasis: "32%",
  },
  phiImage: {
    position: "relative",
    width: "100%",
    minHeight: "300px",
  },
  content: { color: theme.palette.grey[800], margin: "0.75rem 0" },
}));
export default useStyles;
