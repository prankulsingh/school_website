/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import * as Constants from "constants/Constants"

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a>
                {Constants.appStrings.schoolName}
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
