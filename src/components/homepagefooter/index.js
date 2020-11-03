import React from 'react';
import {useHistory} from 'react-router-dom'
import {
    Footer
} from "./style";

function HomePageFooter() {
    const history = useHistory()
    const goLink = (link) => {
        history.push(link)
    }
    return (
    <Footer>
        <div className="left">
            <div className="footerlinkfirst" id="bold">
            Mortgage Calculator | All rights reserved 2020
            </div>
        </div>
        <div className="right">
            <div className="footerlink">
                Terms & Conditions
                </div>
                <div className="footerlink">
                Privacy Policy
                </div>
                <div className="footerlink">
                Partners Program
            </div>
        </div>
    </Footer>
    );
  }
  
export default HomePageFooter;
