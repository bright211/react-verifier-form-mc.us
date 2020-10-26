import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { menuIcon } from "../../assets";

function Header() {
  const location = useLocation();
  const [value, setValue] = useState({
    show: false
  })

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth<=900){
        setValue({...value, show:true})
      } else {
        setValue({...value, show:false})
      }
    }

    window.addEventListener("resize", handleResize);
  },[]);
  return (
    <header>
      <Logo />
      {location.pathname === "/homepage" && value.show && (
        <img src={menuIcon} alt="menu icon" />
      )}
    </header>
  );
}

export default Header;
