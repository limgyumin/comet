import { withStyles, TextField } from "@material-ui/core";

export default withStyles({
  root: {
    width: "20rem",
    height: "2.9rem",
    marginBottom: "0.4rem",
    "& label.Mui-focused": {
      color: "#191B1D",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#191B1D",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#191B1D",
      },
    },
  },
})(TextField);
