import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  padding: 90px 0;
  margin: auto;

  & .block {
    width: 35vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .block-title,
    .block-content,
    .block-sub-content {
      color: #37383c;
      font-family: "AvenirNext Regular";
      display: flex;
      text-align: left;
      padding:0;
    }

    & .blockImg{
      width: 500px;
      height: 500px;
    }

    & .title{
      text-align: left;
      font-size: 38px;
      font-family: "AvenirNext Medium";
      font-weight: 500;
    }

    & .desc{
      padding: 30px 0 0 0;
      line-height: 1.63;
      font-size: 16px;
      text-align: left;
    }

    & .label_input{
      padding: 30px 0 0 0;
    }

    & .LoginBtn{
      padding: 30px 0 0 0;
    }
  }

  @media (min-width: 1100px) {
    & .group{
      margin:auto;
      width:1100px;
      display:flex;
      justify-content: space-between;

      & .block {
        width: 500px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 1150px) {
    & .group{
      padding: 0 40px 0 40px;
      margin:auto;
      width:950px;
      display:flex;
      justify-content: space-between;

      & .block {
        width: 400px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .blockImg{
          width: 400px;
          height: 400px;
        }

        & .title{
          text-align: left;
          font-size: 24px;
          font-family: "AvenirNext Medium";
          font-weight: 500;
        }
    
        & .desc{
          padding: 20px 0 0 0;
          line-height: 1.63;
          font-size: 16px;
          text-align: left;
        }
    
        & .label_input{
          padding: 20px 0 0 0;
        }
    
        & .LoginBtn{
          padding: 20px 0 0 0;
        }
      }
    }
  }

  @media(max-width: 970px){
    & .group{
      padding: 0 40px 0 40px;
      margin:auto;
      width:900px;
      display:flex;
      justify-content: space-between;

      & .block {
        width: 380px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .blockImg{
          width: 380px;
          height: 380px;
        }

        & .title{
          text-align: left;
          font-size: 24px;
          font-family: "AvenirNext Medium";
          font-weight: 500;
        }
    
        & .desc{
          padding: 20px 0 0 0;
          line-height: 1.63;
          font-size: 16px;
          text-align: left;
        }
    
        & .label_input{
          padding: 20px 0 0 0;
        }
    
        & .LoginBtn{
          padding: 20px 0 0 0;
        }
      }
    }
  }

  @media(max-width: 900px){
    flex-wrap: wrap;
    padding: 0 20px 60px 20px !important;

    & .group{
      padding: 0 0 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & .block {
        padding-top: 60px;
        width:100%;
      }
  
      & .blockImg{
        width: 100% !important;
        height: 100% !important;
      }
  
      & .title{
        padding-top: 30px;
      }
  
      & .LoginBtn{
        padding: 60px 0 0 0 !important;
      }
    }
  }
`;
