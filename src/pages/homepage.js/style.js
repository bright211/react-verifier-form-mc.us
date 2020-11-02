import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width:100% !important;

  & .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
  }


  @media (max-width: 900px) {
    overflow: scroll;
    padding-top: 60px;
    & .header {
      display: none;      
    }
  }
`;

export const BlockContainer = styled.div.attrs((props) => ({
  
}))`

  padding:90px 70px;
  display: flex;
  justify-content: space-between;
  position: relative;

  & .group2{
    width: 37vw;

    & .block-title{
      color: #000000;
      font-size: 38px;
      font-weight: 500;
      font-family: "AvenirNext Medium";
      display: flex;
      text-align: left;
      padding:0;
    }

    & .block-content,
    & .block-sub-content {
      color: #000000;
      font-family: "AvenirNext Regular";
      display: flex;
      text-align: left;
      padding:60px 0 0 0;
    }

    & .block-sub-content {
      font-size: 10px;
    }
    & .block-btn-group{
      padding: 60px 0 0 0;
      float: left;
      display: flex;
      justify-content: space-between;
      width: 426px;
    }
  }

  & .group {
    position: relative;
    width: 37vw;
    margin-left: 30px;
    margin-right: 30px;
    :after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    & .block {
      position: absolute;
      width: 100%;
      height: 100%;

      & .blockImg{
        width: 100%;
        height: 100%;
      }

      & .block-title{
        color: #000000;
        font-size: 38px;
        font-weight: 500;
        font-family: "AvenirNext Medium";
        display: flex;
        text-align: left;
        padding:0;
      }

      & .block-content,
      & .block-sub-content {
        color: #000000;
        font-family: "AvenirNext Regular";
        display: flex;
        text-align: left;
        padding:60px 0 0 0;
      }

      & .block-sub-content {
        font-size: 10px;
      }
      & .block-btn-group{
        padding: 60px 0 0 0;
        float: left;
        display: flex;
        justify-content: space-between;
        width: 426px;
      }
    }
  }

  @media(min-width: 1400px){

    & .group2 {  
      & .block {
        & .block-title{
          font-size: 38px;
        }

        & .block-content,
        & .block-sub-content {
          padding:60px 0 0 0;
        }
  
        & .block-sub-content {
          font-size: 10px;
        }

        & .block-btn-group{
          padding: 60px 0 0 0;
        }

        & .block-btn-group{
          display: flex;
          justify-content: space-between;
          width: 426px;
        }
      }
    }
  }

  @media(max-width: 1250px){
    & .group2 {  
      
      margin-left: 30px;
      margin-right: 30px;

      & .block {
        & .block-title{
          font-size: 28px;
        }

        & .block-content,
        & .block-sub-content {
          padding:30px 0 0 0;
        }
  
        & .block-sub-content {
          font-size: 10px;
        }

        & .block-btn-group{
          padding: 30px 0 0 0;
        }

        & .block-btn-group{
          display: flex;
          justify-content: space-between;
          width: 426px;
        }
      }
    }
  }
  
  @media(max-width: 1024px){
    padding:90px 90px;

    & .group2 {  
      & .block {
        & .block-title{
          font-size: 28px;
        }

        & .block-content,
        & .block-sub-content {
          padding:20px 0 0 0;
        }
  
        & .block-sub-content {
          font-size: 10px;
        }

        & .block-btn-group{
          padding: 20px 0 0 0;
        }

        & .block-btn-group{
          display: flex;
          justify-content: space-between;
          width: 406px;
        }

        & #btnSelect{
          display: none;
        }
      }
    }
  }
  
  @media (max-width: 930px) {
    padding: 0px 20px 60px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    & .group2, .group{
      width: 100%;
      margin:0;

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
          padding: 30px 0 0 0;
          font-size: 16px;
        }
  
        & .block-sub-content {
          padding: 30px 0 0 0;
          font-size: 10px;
        }
  
        & .block-btn-group {
          width: fit-content;
          padding: 60px 0 0 0;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
        }
      }
  
      & .blockImg{
        width: 100% !important;
        height: 100% !important;
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
      font-size: 16px;
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
  
  // & .leftArrowBtn :hover{
  //   opacity:0.8
  // }
  // & .rightArrowBtn :hover{
  //   opacity:0.8
  // }

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

