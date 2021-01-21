import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return(
        <footer className="bck_reds">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"> Your Movie Theater</div>
                <div className="footer_copyright">
                    The Best Movie Theater. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
