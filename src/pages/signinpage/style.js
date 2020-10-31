import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  padding: 90px 160px;
  
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
  @media(max-width: 900px){
    flex-wrap: wrap;
    padding: 0 20px 60px 20px !important;
    & .block {
      padding-top: 20px;
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
  @media (max-width: 1300px){
    padding: 97px 80px 120px 80px;
  }
  @media (max-width: 1170px){
    padding: 97px 40px 120px 40px;
  }
`;
