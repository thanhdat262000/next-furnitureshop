import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[200],
    padding: "2rem 0",
  },
  container: {
    width: "95%",
    maxWidth: "1180px",
    "& > div": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      columnGap: "32px",
      [theme.breakpoints.down(780)]: {
        gridTemplateColumns: "1fr",
        rowGap: "24px",
      },
    },
  },
  title: {
    marginBottom: "2.5rem",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "& svg": {
      color: theme.palette.primary.main,
      fontSize: "56px",
    },
    "& h6": {
      fontWeight: 600,
      margin: "12px 0",
    },
  },
}));
export default useStyles;
