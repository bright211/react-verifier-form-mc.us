import React, { useEffect } from "react";
import Dialog from '@material-ui/core/Dialog';
import { ReactComponent as CloseBtn } from "../../assets/images/closebtn.svg"
import { closeBtn, popupImg } from '../../assets/';
import { ModalContainer } from './style';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(2),
    textTransform: "none",
    fontFamily: "AvenirNext Medium",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#353535",
    },
    "&:focus": {
      outline: "none",
    },
    width: '100%',
    height: '55px',
    padding:0,
  },
}));
  
export default function ModalDialog() {
    const classes = useStyles();
    const theme = createMuiTheme({
      palette: {
        primary: {main:"#000"}    
      }  
    });
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    const handleClose = () => {
      setOpen(false);
    };
    
    const buttonClicked = () => {

    }
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="350sm"
      >
          <ModalContainer>
          <div className="sideMenuBtnClose" onClick={handleClose}>
            <CloseBtn className="closeBtn"/>
          </div>
            <div className="modalDialogTitle">
              Would you rather get a call from one of our mortgage and refinance experts?
            </div>
            <div className="modalcontent">
              If you leave us your phone number, one of our experts will contact you in the next 24 hours to help you 
              with whatever you need.
            </div>
            <div className="modalinput">
              <input
                placeholder="Your phone number…"
                className="input-box form-control"
                type="text"
              />
            </div>
            <div className="confirmBtn">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Process the request
                  </Button>
                </ThemeProvider>
            </div>
          </ModalContainer>
        </Dialog>
      </div>
    );
  }
  