import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import * as Constants from "../../../constants/Constants";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent-half-opacity");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("navbar-transparent-almost-opacity");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent-half-opacity");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
            >
              {Constants.appStrings.schoolName}
            </NavbarBrand>
            <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
            >
              <span className="navbar-toggler-bar top-bar"/>
              <span className="navbar-toggler-bar middle-bar"/>
              <span className="navbar-toggler-bar bottom-bar"/>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    href="http://example.com?ref=creativetim"
                    nav
                >
                  <p>{Constants.appStrings.aboutUs.aboutUs}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                      to="/vision"
                      tag={Link}
                  >
                    {Constants.appStrings.aboutUs.vision}
                  </DropdownItem>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.aboutUs.mission}
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.aboutUs.managedBy}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    href="http://example.com?ref=creativetim"
                    nav
                >
                  <p>{Constants.appStrings.school.school}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.school.boards}
                  </DropdownItem>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.school.classes}
                  </DropdownItem>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.school.facilities}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    href="http://example.com?ref=creativetim"
                    nav
                >
                  <p>{Constants.appStrings.contactUs.contactUs}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.contactUs.phone}
                  </DropdownItem>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.contactUs.email}
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                  >
                    {Constants.appStrings.contactUs.address}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to={Constants.subdomains.notices} tag={Link}>
                  {Constants.appStrings.notices}
                </NavLink>
              </NavItem>
              {/*<NavItem>*/}
              {/*  <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">*/}
              {/*    Have an issue?*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              <NavItem>
                <NavLink
                  href={Constants.externalLinks.twitter}
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"/>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href={Constants.externalLinks.facebook}
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"/>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href={Constants.externalLinks.instagram}
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"/>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
