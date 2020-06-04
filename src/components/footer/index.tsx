/**
 *  @version1 1.0.2
 *  @author Mrvalem - digitalNews
 *  @description Componente <Footer />
 */

import * as React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <footer className="justify-center">
      <div className="container">
        <div className="row-responsive full align-center">
          <div className="full legend">
            <p className="color-white font-small weight-medium">
              2020® digitalNews
            </p>
          </div>
          <div className="social full align-center">
            <div className="align-center">
              <a href="/#" title="Facebook de Trejocode">
                <AiFillFacebook
                  title="Facebook de Trejocode"
                  size={20}
                  className="color-white"
                />
              </a>
            </div>
            <div className="align-center">
              <a href="/#" title="Instagram de Trejocode">
                <AiFillInstagram
                  title="Instagram de trejocode"
                  size={20}
                  className="color-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
