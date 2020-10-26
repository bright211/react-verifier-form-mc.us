import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";

const override = css`
  border-radius: 5px;
  position: fixed;
  margin: auto;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:1000;
`;

function Loading() {
  return (
    <PuffLoader
      css={override}
      size={200}
      color={"#37383C"}
      loading={true}
    />
  );
}

export default Loading;
