import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import {
  BlockContainer,
  BlockContainerSecond,
  BlockSecond,
  CircleIcon,
  ContentContainer,
} from "./style";
import Header from "../../components/header";
import Button from "../../components/button";
import SideMenu from "../../components/sidemenu";
import * as Types from "../../state/types";

function HomePage() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [value, setValue] = useState({
    ...storeData,
  });

  useEffect(()=>{
    setValue({...storeData})
  },[storeData])
  const buttonClicked = () => {};
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  return (
    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer>
        <BlockContainer className="header">
          <div className="title">
            Apply for a mortgage or a refinancing of a mortgage that you already
            have and receive a multitude of proposals from various private
            entities.
          </div>
        </BlockContainer>
        <BlockContainer className="first-block">
          <div className="block first"></div>
          <div className="block">
            <div className="block-title">
              Mortgage and refinancial has never been that easy.
            </div>
            <div className="block-content">
              Zero pioneered the first modern banking experience to combine
              debit-style functionality with credit card rewards. Powered by a
              mobile app and Zerocard, a credit card that offered rewards of up
              to 3.0% cash back, Zero was featured in the New York Times and
              served tens of thousands of customers before closing to new
              customers in March 2020.*
            </div>
            <div className="block-sub-content">
              *For the time being, information about the original Zero offering
              appears below and throughout this website. Zero closed to new
              customers in March 2020.
            </div>
            <div className="block-btn-group">
              <Button
                text="Mortgage Calculator"
                buttonClicked={buttonClicked}
              />
              <Button
                text="Refinancial Calculator"
                buttonClicked={buttonClicked}
              />
            </div>
          </div>
        </BlockContainer>
        <BlockContainerSecond>
          <div className="first-row">
            <div className="title">Simplicity of a debit card.</div>
            <div className="title">Cash back of a credit card.</div>
            <div className="content">
              With a debit card, it’s easy to know how much money you have, but
              you usually don’t get cash back.
            </div>
            <div className="content bottom">
              With a credit card, you can get great cash back, but it’s a chore
              to track things so you may spend more.
            </div>
          </div>
          <div className="second-row">
            <BlockSecond>
              <CircleIcon></CircleIcon>
              <div className="content-container">
                <div className="title">Get a online mortgage experience.</div>
                <div className="content">
                  Make deposits and your balance in the Zero app goes up, spend
                  on your Zerocard and your balance goes down. Purchases are
                  reflected right away and our unique features help you avoid
                  spending more than your balance or running up monthly bills
                  that you have to worry about manually paying.
                </div>
              </div>
            </BlockSecond>
            <BlockSecond>
              <CircleIcon></CircleIcon>
              <div className="content-container">
                <div className="title">
                  Get a online refinancial experience.
                </div>
                <div className="content">
                  Make deposits and your balance in the Zero app goes up, spend
                  on your Zerocard and your balance goes down. Purchases are
                  reflected right away and our unique features help you avoid
                  spending more than your balance or running up monthly bills
                  that you have to worry about manually paying.
                </div>
              </div>
            </BlockSecond>
          </div>
        </BlockContainerSecond>
      </ContentContainer>
    </Container>
  );
}

export default HomePage;
