import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #000000;
  padding: 23px 20px;
  justify-content: space-between;

  & .left {
    float: left;
    display: flex;
    flex-direction: row;
  }
  
  & .right {
    float: right;
    display: flex;
    flex-direction: row;
  }

  & .footerlink {
    padding: 0 10px;
    font-size: 10px;
    color: #ffffff;
  }

  & .footerlinkfirst {
    font-size: 10px;
    font-weight: 500;
    color: #ffffff;
  }

  & .footerlink:hover {
    cursor: pointer;
  }

  @media (max-width: 930px) {
    text-align: left;
    flex-direction: column;
    padding: 30px 20px;
    height: 215px;

    & .left {
      display: flex;
      flex-direction: column;
      height: 66%;
      justify-content: space-around;
    }

    & .right {
      display: flex;
      flex-direction: column;
      height: 34%;
      justify-content: space-around;
    }

    & .footerlink {
      padding: 15px 0px;
      font-size: 10px;
      color: #ffffff;
      padding: 0;
    }

    & .footerlinkfirst {
      font-size: 10px;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;
