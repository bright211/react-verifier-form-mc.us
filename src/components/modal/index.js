import React, { useEffect } from "react";
import Dialog from '@material-ui/core/Dialog';

import { closeBtn, popupImg } from '../../assets/';
import { ModalContainer } from './style';

import Button from "../../components/button";
  
export default function ModalDialog() {
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
            <div className="sideMenuBtnClose">
                <img className="sideMenuBtnImg" src={closeBtn} onClick={() => handleClose()} />
            </div>
            <ModalContainer>
                <div className="modalDialogTitle">
                    Thanks for visit Mortgage Calculator. Please start to calculate you mortgage or your refinancing just clicking here!
                </div>
                <div className="modalDialogImg">
                  <img class="popupimg" src={popupImg} />
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
  