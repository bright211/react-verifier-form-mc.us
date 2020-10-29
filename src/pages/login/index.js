import React, { useEffect, useState } from "react";

import * as Types from "../../state/types";
import { Container } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import SideMenu from "../../components/sidemenu";

function Login(){
    const dispatch = useDispatch();
    const storeData = useSelector((store) => store.data);
    const toggleMenu = (data) => {
        dispatch({ type: Types.SET_DATA, payload: { ...data } });
    };
    const [value, setValue] = useState({
        ...storeData,
    });

    return(
        <Container>
        <Header toggleMenu={toggleMenu} />
        <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
            <div className="title">
                The 1st platform for mortgage calculator in U.S. Start with our mortgage calculator to get the best options. Mortgage Calculator
            </div>
      </Container>
    )
}

export default Login;