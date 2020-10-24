import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;

  @media (max-width: 930px) {
    min-height: 350px;
    overflow: scroll;
  }
`;

export const TitleContainer = styled.div`
  padding: 60px 100px 0 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  & .label {
    float: left;
    font-size: 38px;
    text-align: left;
    width: 40%;
  }
  @media (max-width: 930px) {
    padding: 64px 20px 0 20px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    & .label {
      float: left;
      font-size: 24px;
      text-align: left;
      width: 100%;
    }
  }
`;
