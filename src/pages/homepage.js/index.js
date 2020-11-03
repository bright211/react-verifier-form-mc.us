import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import { backImg } from "../../assets";

import { ReactComponent as AvatarFirst } from "../../assets/images/MORTGAGE.svg";
import { ReactComponent as AvatarSecond } from "../../assets/images/REFINANCING.svg";

import ModalDialog from "../../components/modal";

import {
  BlockContainer,
  BlockContainerSecond,
  BlockSecond,
  CircleIcon,
  ContentContainer,
  BlockContainerThird,
} from "./style";
import Header from "../../components/header";
import Button from "../../components/button";
import SideMenu from "../../components/sidemenu";
import * as Types from "../../state/types";
import HomePageFooter from "../../components/homepagefooter";


function HomePage() {

  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState({
    ...storeData,
  });
  const[flag, setFlag] = useState(false);

  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);
  const buttonClicked = () => {};
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  return (

    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer id="backcolor">
        <ModalDialog />
        <BlockContainer>
          <div className="block">
            <div className="title">
              Mortgage and Refinancial has never been that easy.
            </div>
            <div className="content">
              Now from Mortgage Calculator you can calculate for free what the cost of your mortgage will be.
              Also you’ll receive personal attention for your mortgage or refinancing. Choose the best offer!
            </div>
            <div className="btn-group">
                  <Button
                      text="Calculate Mortgage"
                      buttonClicked={buttonClicked}
                  />
                  <Button
                      text="Calculate Refinancing"
                      buttonClicked={buttonClicked}
                  />
              </div>
            <div className="privacy">
              * Please, to calculate your mortgage and receive proposals, 
              fill out the Mortgage Calculator or Refinancing Calculator form below.
            </div>
          </div>
        </BlockContainer>
        <BlockContainerSecond>
          <div className="block">
            <div className="title">Simplicity of a debit card.</div>
            <div className="title">Cash back of a credit card.</div>
            <div className="content">
              With a debit card, it’s easy to know how much money you have, but you usually don’t get cash back. 
              With a credit card, you can get great cash back, but it’s a chore to track things so you may spend more.
            </div>
          </div>
        </BlockContainerSecond>
        <BlockContainerThird>
          <div className="block">
            <CircleIcon>
              <AvatarSecond style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Get A Online Mortgage Experience.</div>
            <div className="content">
              Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down. 
              Purchases are reflected right away and our unique features help you avoid spending more than your balance or running up monthly bills that you have to worry about manually paying.
            </div>
          </div>
          <div className="block">
            <CircleIcon>
              <AvatarFirst style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Get A Online Mortgage Experience.</div>
            <div className="content">
              Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down. 
              Purchases are reflected right away and our unique features help you avoid spending more than your balance or running up monthly bills that you have to worry about manually paying.
            </div>
          </div>
        </BlockContainerThird>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default HomePage;
