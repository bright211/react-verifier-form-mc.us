import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { ReactComponent as Menu } from "../../assets/images/MENU.svg";
import { menuIcon } from "../../assets";
import { MenuIconBtn } from './style';

function Header({toggleMenu}) {
  const location = useLocation();
  const [value, setValue] = useState({
    show: false
  })

  React.useEffect(() => {
    if(window.innerWidth<=900){
      setValue({...value, show:true})
    } else {
      setValue({...value, show:true})
    }
    function handleResize() {
      if(window.innerWidth<=900){
        setValue({...value, show:true})
      } else {
        setValue({...value, show:true})
      }
    }

    window.addEventListener("resize", handleResize);
  },[]);
  return (
    <header>
      <Logo />
      {(value.show || location.pathname==='/homepage' || location.pathname==='/privacy') && (
        <MenuIconBtn  onClick={()=>toggleMenu({drawMenu:true})}>
          <Menu />
          {/* <img src={menuIcon} alt="menu icon"/> */}
        </MenuIconBtn>
      )}
    </header>
  );
}

export default Header;
