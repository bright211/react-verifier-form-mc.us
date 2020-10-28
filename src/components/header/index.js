import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { menuIcon } from "../../assets";

function Header({toggleMenu}) {
  const location = useLocation();
  const [value, setValue] = useState({
    show: false
  })

  React.useEffect(() => {
    if(window.innerWidth<=900){
      setValue({...value, show:true})
    } else {
      setValue({...value, show:false})
    }
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
      {(value.show || location.pathname==='/homepage') && (
        <img src={menuIcon} alt="menu icon" onClick={()=>toggleMenu({drawMenu:true})}/>
      )}
    </header>
  );
}

export default Header;
