import React from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "./style";

function Footer(props) {
  const history = useHistory();
  
  /*
   * when continue btn click, go to next page
   */
  const goNavigation = () => {
    if (props.navigation === "first") {
      history.push("/quotedetailsecond");
    } else if (props.navigation === "second") {
      history.push("/processbar");
    }
  };

  /*
   * when exit btn click, go to previous page
   */
  const goBackNavigation = () => {
    if (props.navigation === "second") {
      history.push("/quotedetailfirst");
    }
  };

  return (
    <FooterContainer>
      <div className="exit-btn" onClick={goBackNavigation}>
        Exit
      </div>
      <div className="next-btn" onClick={() => props.goNext()}>
        Continue
      </div>
    </FooterContainer>
  );
}

export default Footer;
