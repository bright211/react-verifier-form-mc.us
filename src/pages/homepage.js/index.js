import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "@material-ui/core";
import CarouselSlide from "../../components/slider";
import { ReactComponent as ArrowLeft } from "../../assets/images/ARROW-LEFT.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/ARROW-RIGHT.svg";
import { ReactComponent as AvatarFirst } from "../../assets/images/MORTGAGE.svg";
import { ReactComponent as AvatarSecond } from "../../assets/images/REFINANCING.svg";
import { Container } from "../../styles";
import { siderImg1 } from "../../assets/index";
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
import HeaderBottom from "../../components/HeaderBottom";
import HomePageFooter from "../../components/homepagefooter";
import { Timer } from "@material-ui/icons";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <ArrowLeft /> : <ArrowRight />;
  const clsname = direction === "left" ? "leftArrowBtn" : "rightArrowBtn";
  return (
    <div className={clsname} onClick={clickFunction}>
      {icon}
    </div>
  );
}

function HomePage() {
  const SLIDE_INFO = [
    { title: "Slide 1" },
    { title: "Slide 2" },
    { title: "Slide 3" },
    { title: "Slide 4" },
    { title: "Slide 5" },
  ];
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("right");
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const [value, setValue] = useState({
    ...storeData,
  });
  const[flag, setFlag] = useState(false);
  const jTimer = () => {
    setFlag(true);
    setTimeout(() => {
      jTimer();
      onArrowClick("right");
    }, 20000)
  }

  useEffect(() => {
    if(!flag){
      jTimer();
    }
    setValue({ ...storeData });
  }, [storeData]);
  const buttonClicked = () => {};
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (

    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer>
        <BlockContainer className="header">
          <HeaderBottom />
        </BlockContainer>
        <ModalDialog />
        <BlockContainer className="first-block">
            <div class="group">
              <div class="block">
                <img src={siderImg1} class="blockImg" />
              </div>
            </div>
            <div class="group2">
              <div class="block" id="secondblock">
                <div className="block-title">
                  Mortgage and refinancial has never been that easy.
                </div>
                <div className="block-content">
                  Now from Mortgage Calculator you can calculate for free what the cost of your mortgage will be.  
                  Also you’ll receive personal attention for your mortgage or refinancing. Choose the best offer!
                </div>
                <div className="block-sub-content">
                * Please, to calculate your mortgage and receive proposals, 
                fill out the Mortgage Calculator or Refinancing Calculator form below.
                </div>
                <div className="block-btn-group">
                <Button id="btnSelect"
                  text="Mortgage Calculator"
                  buttonClicked={buttonClicked}
                />
                <Button id="btnSelect"
                  text="Refinancial Calculator"
                  buttonClicked={buttonClicked}
                />
              </div>
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
              <CircleIcon>
                <AvatarFirst style={{ width: "100%", height: "100%" }} />
              </CircleIcon>
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
              <CircleIcon>
                <AvatarSecond style={{ width: "100%", height: "100%" }} />
              </CircleIcon>
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
        <BlockContainerThird>
          <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
          <Slide
            in={slideIn}
            direction={slideDirection}
            className="SliderContainer"
          >
            <div>
              <CarouselSlide content={content} />
            </div>
          </Slide>
          <Arrow
            direction="right"
            clickFunction={() => onArrowClick("right")}
          />
        </BlockContainerThird>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default HomePage;
