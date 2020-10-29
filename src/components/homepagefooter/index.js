import React from 'react';
import {
    Footer
} from "./style";

function HomePageFooter() {
    return (
    <Footer>
        <div className="left">
            <div className="footerlink">
            Mortgage Calculator | All rights reserved 2020
            </div>
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
        <div className="right">
            <div className="footerlink">
            Facebook
            </div>
            <div className="footerlink">
            Instagram
            </div>
        </div>
    </Footer>
    );
  }
  
export default HomePageFooter;
