import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { ReactComponent as CloseBtn } from "../../assets/images/closebtn.svg"
import { SiderBarHeader, SiderBarBody } from './style';
import { ReactComponent as AvatarFirst } from "../../assets/images/MORTGAGE.svg";
import { ReactComponent as AvatarSecond } from "../../assets/images/REFINANCING.svg";
import { CircleIcon } from './style';

const useStyles = makeStyles({
  main: {
    zIndex: 6000,
  },
  list: {
    width: "449px",
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
        <div className="block" onClick={toggleDrawer(anchor, false)} >
            <CircleIcon>
              <AvatarFirst style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Get A Online Mortgage Experience.</div>
            <div className="content">
              Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down. 
              Purchases are reflected right away and our unique features help you avoid spending more than your balance or running up monthly bills that you have to worry about manually paying.
            </div>
          </div>
        <div className="block" id="secondblock" onClick={toggleDrawer(anchor, false)} >
            <CircleIcon>
              <AvatarSecond style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Get A Online Mortgage Experience.</div>
            <div className="content">
              Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down. 
              Purchases are reflected right away and our unique features help you avoid spending more than your balance or running up monthly bills that you have to worry about manually paying.
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
