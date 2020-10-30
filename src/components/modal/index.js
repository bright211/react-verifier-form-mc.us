import React, { useEffect } from "react";
import Dialog from '@material-ui/core/Dialog';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { closeBtn } from '../../assets/';
import { ModalContainer } from './style';

import Button from "../../components/button";

// const useStyles = makeStyles((theme) => ({
//     margin: {
//         textTransform: 'none',
//         fontFamily:'AvenirNext Regular',
//         fontSize: '16px',
//         fontWeight: 500,
//         width:"198px",
//         height:"55px",
//         margin: "7.5px 20px",
//         justifyContent:"space-between",
//         '&:hover': {
//         backgroundColor: "#353535",
//         },
//         '&:focus': {
//         outline: "none",
//         },
//     },
// }));

// const theme = createMuiTheme({
//     palette: {
//         primary: {main:"#000"}    
//     }  
// });
  
export default function ModalDialog() {
    // const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setOpen(true);
        }, 10000);
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
          maxWidth="sm"
        >
            <ModalContainer>
                <div className="btnClose">
                    <img className="imgCls" src={closeBtn} onClick={() => handleClose()} />
                </div>
                <div className="modalDialogTitle">
                    Thanks for visit Mortgage Calculator. Please start to calculate you mortgage or your refinancing just clicking here!
                </div>
                <div className="modalDialogImg">
                </div>
                <div className="btn-group">
                    <Button
                        text="Mortgage Calculator"
                        buttonClicked={buttonClicked}
                    />
                    <Button
                        text="Refinancial Calculator"
                        buttonClicked={buttonClicked}
                    />
                </div>
            </ModalContainer>
        </Dialog>
      </div>
    );
  }
  