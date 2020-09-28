import { Button, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    color: "#191B1D",
    fontFamily: "Noto Sans KR",
    fontWeight: 500,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#C9CED4",
    width: "15.6rem",
    height: "2.9rem",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#D2D8DE",
    },
  },
}))(Button);
