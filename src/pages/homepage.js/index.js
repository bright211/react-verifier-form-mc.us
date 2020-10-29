import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from '@material-ui/core';
import CarouselSlide from '../../components/slider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container } from "../../styles";
import { siderImg1 } from "../../assets/index";
import {
  BlockContainer,
  BlockContainerSecond,
  BlockSecond,
  CircleIcon,
  ContentContainer,
  BlockContainerThird
} from "./style";
import Header from "../../components/header";
import Button from "../../components/button";
import SideMenu from "../../components/sidemenu";
import * as Types from "../../state/types";
import HomePageFooter from '../../components/homepagefooter'

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
  const clsname = direction === 'left' ? "leftArrowBtn" : "rightArrowBtn"
  return <div className={clsname} onClick={clickFunction}>{icon}</div>;
}

function HomePage() {
  const SLIDE_INFO = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 4' },
    { title: 'Slide 5' },
];
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
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

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
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
          <div className="title">
            The 1st platform for mortgage calculator in U.S. Start with our mortgage calculator to get the best options. Mortgage Calculator
          </div>
        </BlockContainer>
        <BlockContainer className="first-block">
          <div className="block">
            <img src={ siderImg1 } class="blockImg"/>
          </div>
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
        <BlockContainerThird>
              <Arrow
                  direction='left'
                  clickFunction={() => onArrowClick('left')}
              />
              <Slide in={slideIn} direction={slideDirection} className="SliderContainer">
                  <div>
                      <CarouselSlide content={content} />
                  </div>
              </Slide>
              <Arrow
                  direction='right'
                  clickFunction={() => onArrowClick('right')}
              />
        </BlockContainerThird>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default HomePage;
