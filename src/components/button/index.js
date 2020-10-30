import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textTransform: "none",
    fontFamily: "AvenirNext Regular",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#353535",
    },
    "&:focus": {
      outline: "none",
    },
    width: '198px',
    height: '55px',
    padding:0,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000" },
  },
});

function CustomButton({ buttonClicked, text }) {
    const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => buttonClicked()}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
