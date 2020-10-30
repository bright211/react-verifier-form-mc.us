import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;

  & .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
  }

  @media (max-width: 930px) {
    overflow: scroll;
  }

  @media (max-width: 700px) {
    padding-top: 60px;
    & .header {
      display: none;      
    }
  }
`;

export const BlockContainer = styled.div.attrs((props) => ({
  
}))`
  padding: 97px 160px 120px 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fcfcfc;

  

  & .title {
    background-color: #000000;
    color: white;
    width: 100%;
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  & .block {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .block-title{
      color: #000000;
      font-size: 24px;
      font-weight: 500;
      font-family: "AvenirNext Medium";
      display: flex;
      text-align: left;
      padding:0;
    }

    .block-content,
    .block-sub-content {
      color: #000000;
      font-family: "AvenirNext Regular";
      display: flex;
      text-align: left;
      padding:0;
    }

    & .blockImg{
      width: 100%;
      height: 100%;
    }

    & .block-title {
      font-size: 38px;
    }

    & .block-content {
      font-size: 18px;
      line-height: 2rem;
      margin-top: 47px;
    }

    & .block-sub-content {
      font-size: 10px;
      margin-top: 42px;
    }

    & .block-btn-group {
      display: flex;
      margin-top: 66px;
      width: 426px;
      justify-content: space-between;
      & .home-btn {
        width: 198px;
        height: 56px;
        background-color: #010105;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-right: 20px;
        color: white;
      }
    }
  }

  & .first {
    background-color: #eff7f9;
  }


  @media (max-width: 1260px) {
    padding: 97px 120px 120px 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .block {
      width: 37vw;
      // height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & .block-title {
        font-size: 24px;
      }

      & .block-sub-content {
        font-size: 10px;
      }

      & .block-btn-group {
        & .home-btn {
          margin-bottom: 10px;
        }
      }
    }

    & .first {
      background-color: #eff7f9;
    }
  }

  @media (max-width: 990px) {
    padding: 0px 20px 120px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .block {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 0px;

      & .block-title {
        padding: 30px 0 0 0;
        font-size: 24px;
      }

      & .block-content {
        font-size: 16px;
        // padding-bottom: 20px;
      }

      & .block-sub-content {
        font-size: 10px;
      }

      & .block-btn-group {
        height: 140px;
        flex-direction: column;
        justify-content: space-between;

        & .home-btn {
          margin-bottom: 10px;
        }
      }
    }

    & .first {
      width: 100%;
    }

    & .first:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
`;

export const BlockContainerSecond = styled.div`
  padding: 94px 100px;
  background-color: #000000;
  color: white;

  .first-row {
      width: 60vw;

      & .title, .content {
          text-align: left;
      }

      & .title {
        font-size: 30px;
        font-family: 'AvenirNext Medium';

      }
      & .content{
          font-size: 18px;
          padding 44px 0 0 0;
      }
      & .bottom {
        padding-top:5px;
      }

      @media (max-width: 930px) {
        width: 100%;

        & .title {
            font-size: 22px;
            font-family: 'AvenirNext Medium'
          }

          & .content{
            font-size: 16px;
            padding: 45px 0 0 0;
        }
        & .bottom {
          padding-top:30px;
        }
    }
  }

  .second-row {
      display: flex;
      justify-content: space-between;

      @media (max-width: 930px) {
          flex-wrap: wrap;
      }
  }

  @media (max-width: 930px) {
    padding: 93px 20px;
}
`;

export const BlockSecond = styled.div`
  width: 38vw;
  display: flex;
  justify-content: space-between;
  padding-top: 67px;

  & .content-container {
    width: 33vw;
    padding-left: 40px;

    & .title,
    .content {
      text-align: left;
    }

    & .title {
      font-size: 24px;
      font-family: "AvenirNext Medium";
      padding-bottom: 38px;
    }

    & .content {
      font-size: 18px;
      line-height: 2rem;
    }

    .avatarIcon{
      width: 41px;
      height: 37px;
    }
  }

  @media (max-width: 930px) {
    width: 100%;
    flex-direction: column;

    & .content-container {
      width: 100%;
      padding-left: 0;
      padding-top: 33px;

      & .title {
        font-size: 20px;
        font-family: "AvenirNext Medium";
        padding-bottom: 20px;
      }

      & .content {
        font-size: 16px;
      }

    }
  }
`;

export const CircleIcon = styled.div`
  margin-top: 10px;
  margin-left: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  @media (max-width: 930px) {
    width: 45px;
    height: 45px;
  }
`;

export const BlockContainerThird = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding:60px 100px;

  & .SliderContainer{
    width: 99%;
    display: 'flex',
    justifyContent: 'center',
  }
  
  @media (max-width: 930px){
    padding:60px 0px;
    
    & .leftArrowBtn{
      top: 30px;
      right:66px;
      position: absolute;
    }

    & .rightArrowBtn{
      top: 30px;
      right:20px;
      position: absolute;
    }
  }
`;

