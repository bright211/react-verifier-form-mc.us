import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/LOGO-MORTGAGE-CALCULATOR.svg";
import { ReactComponent as Menu } from "../../assets/images/MENU.svg";
import { MenuIconBtn } from './style';

import { Link, animateScroll as scroll } from "react-scroll";

function Header({toggleMenu}) {
  const location = useLocation();
  const [value, setValue] = useState({
    show: false
  })
  // const [setClsName, setClsName] = useState({ value:"default" });
  
  window.addEventListener('scroll', (event) => {
    var x = document.getElementsByTagName('header');
		if(window.scrollY > 150){
			x[0].style.backgroundColor = "rgba(0, 0, 0, 0.45)";
		}
		else if(window.scrollY < 150){
      x[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
		}
  });

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth<=900){
        setValue({...value, show:true})
      } else {
        setValue({...value, show:true})
      }
    }
  },[]);
  return (
    <header>
        <div className="BtnLogo">
          <Logo/>
        </div>
        <MenuIconBtn  onClick={()=>toggleMenu({drawMenu:true})}>
          <Menu />
        </MenuIconBtn>
      {/* </div> */}
    </header>
  );
}

export default Header;
