import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer, BlockContainer } from "./style";
import Header from "../../components/header";
import HeaderBottom from "../../components/HeaderBottom";
import HomePageFooter from "../../components/homepagefooter";

function TermsPage() {
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
          <div className="title">Terms and Conditions</div>
          <div className="first-title">
            Mortgage Calculator Terms and Conditions
          </div>
          <div className="sub-title">Introduction.</div>
          <div className="content">
            The Terms and Conditions are described and will be administered for
            your use on our website, Mortgage Calculator, accessible at
            www.mortgagecalculator.com.
          </div>
          <div className="content">
            These Terms will apply in their entirety and will affect your use of
            this website. By using this website, you agree to accept all the
            terms and conditions written here. You should not use this website
            if you do not agree to any of these Standard Website Terms and
            Conditions.
          </div>
          <div className="content">
            Intellectual Property Rights.Apart from the content that you own,
            under these Terms, Mortgage Calculator and / or its licensors own
            all intellectual property rights and materials contained in this
            website.
          </div>
          <div className="content">
            You are granted a limited license only for the purpose of viewing
            the material contained on this website.
          </div>
          <div className="sub-title">Restrictions.</div>
          <div className="content">
            It is specifically restricted to all of the following. Publish any
            material from the website in any other medium.Sell, sublicense and /
            or commercialize any material on the website.Perform and / or
            publicly display any material on the website.Using this website in
            any way that is or may be harmful to this website.Use of this
            website contrary to applicable laws and regulations, or in any way
            may cause damage to the website or to any person or business
            entity.Participate in any data extraction, data collection, or any
            other similar activity in connection with this website.Use this
            website to participate in any type of advertising or marketing.
          </div>
          <div className="content">
            Access to you is restricted to certain areas of this website and
            Mortgage Calculator may further restrict access to any area of
            ​​this website, at any time. Any user ID and password you may have
            for this website are confidential and you must also maintain
            confidentiality.
          </div>
        </BlockContainer>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default TermsPage;
