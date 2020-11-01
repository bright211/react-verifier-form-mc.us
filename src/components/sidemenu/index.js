import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { ReactComponent as CloseBtn } from "../../assets/images/closebtn.svg"
import { siderImg1, siderImg3 } from "../../assets";
import { SiderBarHeader, SiderBarBody } from './style';

const useStyles = makeStyles({
  main: {
    zIndex: 6000,
  },
  list: {
    width: "600px",
    
    '@media (max-width: 930px)': {
        width: window.innerWidth
    }
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer({ value, toggleMenu }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: value,
  });

  useEffect(() => {
    setState({ ...state, right: value });
  }, [value]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleMenu({ drawMenu: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SiderBarHeader>
        <Logo className="logoImg" />
        <CloseBtn className="closeBtn" onClick={toggleDrawer(anchor, false)} />
      </SiderBarHeader>
      <SiderBarBody>
        <div className="title">
          Welcome to Mortgage Calculator.   A new way to get a Mortgage & Refinancing.
        </div>
        <div className="group" onClick={toggleDrawer(anchor, false)}>
          <div className="bannerImg">
            <img src={siderImg1} className="banner"/>
          </div>
          <div className="text">
            <div className="subscribe1">
              Simplicity of a debit card. Cash back of a credit card.
            </div>
            <div className="subscribe2">
              Pioneers in the process of requesting a new mortgage. Receive several offers and choose the best option.
            </div>
          </div>
        </div>
        <div className="group" onClick={toggleDrawer(anchor, false)}>
          <div className="bannerImg">
            <img src={siderImg3}  className="banner"/>
          </div>
          <div className="text">
          <div className="subscribe1">
              Start using Refinancing Calculator to get some mortgage options.
            </div>
            <div className="subscribe2">
              Pioneers in the process of requesting a new refinancing. Receive several offers and choose the best option.
            </div>
          </div>
        </div>
      </SiderBarBody>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
