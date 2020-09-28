import { withStyles, TextField } from "@material-ui/core";

export default withStyles({
  root: {
    width: "20rem",
    height: "2.9rem",
    "& label.Mui-focused": {
      color: "#0077FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0077FF",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#0077FF",
      },
    },
  },
})(TextField);
