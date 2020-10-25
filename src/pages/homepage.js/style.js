import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;

  @media (max-width: 930px) {
    overflow: scroll;
  }

  @media (max-width: 700px) {
    padding-top: 60px;
  }
`;

export const BlockContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  padding: 60px 160px 120px 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fcfcfc;

  & .block {
    width: 35vw;
    height: 35vw;
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
    }

    & .block-title {
      font-size: 38px;
    }

    & .block-content {
      font-size: 18px;
      line-height: 2rem;
    }

    & .block-sub-content {
      font-size: 10px;
    }

    & .block-btn-group {
      display: flex;

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
    padding: 60px 120px 120px 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .block {
      width: 37vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & .block-title {
        padding: 20px 0;
        font-size: 24px;
      }

      & .block-sub-content {
        font-size: 10px;
        padding: 20px 0;
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

  @media (max-width: 930px) {
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
        padding: 20px 0;
        font-size: 24px;
      }

      & .block-content {
        font-size: 16px;
        padding-bottom: 20px;
      }

      & .block-sub-content {
        font-size: 10px;
        padding: 30px 0;
      }

      & .block-btn-group {
        flex-direction: column;
        padding: 30px 0 0 0;

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
  padding: 100px;
  background-color: #E6E6E6;

  .first-row {
      width: 55vw;

      & .title, .content {
          text-align: left;
      }

      & .title {
        font-size: 30px;
        font-family: 'AvenirNext Medium';

      }
      & .content{
          font-size: 18px;
          padding 20px 0;
      }

      @media (max-width: 930px) {
        width: 100%;
        padding-bottom: 100px;

        & .title {
            font-size: 22px;
            font-family: 'AvenirNext Medium'
          }

          & .content{
            font-size: 16px;
            padding 15px 0;
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
    padding: 100px 20px;
}
`;

export const BlockSecond = styled.div`
  width: 38vw;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  & .content-container {
    width: 33vw;
    padding-left: 20px;

    & .title,
    .content {
      text-align: left;
    }

    & .title {
      font-size: 24px;
      font-family: "AvenirNext Medium";
      padding-bottom: 20px;
    }

    & .content {
      font-size: 18px;
      line-height: 2rem;
    }
  }

  @media (max-width: 930px) {
    width: 100%;
    flex-direction: column;

    & .content-container {
      width: 100%;
      padding-left: 0;
      padding-top: 20px;

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
  background-color: #fcfcfc;

  @media (max-width: 930px) {
    width: 45px;
    height: 45px;
  }
`;
