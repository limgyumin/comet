import { Button, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#191B1D",
    width: "100%",
    height: "3.4rem",
    borderRadius: "0",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#313336",
    },
  },
}))(Button);
