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


export const BlockContainer = styled.div`
  padding: 120px 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fcfcfc;

  & .title {
    font-family: 'AvenirNext Medium';
    font-size: 16px;
  }

  @media (max-width: 930px) {
    padding: 0px 20px 120px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;