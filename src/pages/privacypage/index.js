import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer, BlockContainer } from "./style";
import Header from "../../components/header";
import HeaderBottom from "../../components/HeaderBottom";

function PrivacyPage() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [value, setValue] = useState({
    ...storeData,
  });
  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  return (
    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <HeaderBottom />
      <ContentContainer>
        <BlockContainer>
          <div className="title">Mortgage Calculator Privacy Policy.</div>
        </BlockContainer>
      </ContentContainer>
    </Container>
  );
}

export default PrivacyPage;
