import { Button, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "Noto Sans KR",
    fontWeight: 500,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#C9CED4",
    width: "2rem",
    height: "2.4rem",
    boxShadow: "none",
    borderRadius: "0.6rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#D2D8DE",
    },
  },
}))(Button);
