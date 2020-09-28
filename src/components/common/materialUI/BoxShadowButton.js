import { Button, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#24292E"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#24292E",
    width: "15.6rem",
    height: "2.9rem",
    boxShadow: "0 0 0.1 0.5rem rgba(0,0,0,.5)",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#24292E",
    },
  },
}))(Button);
