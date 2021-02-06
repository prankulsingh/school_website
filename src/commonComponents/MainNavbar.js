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
import * as Constants from "../constants/Constants";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent-half-opacity");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
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
              href="/"
              id="navbar-brand"
            >
              <img src={require("assets/img/schoolLogo.png")} height="27" style={{marginRight: "10px"}}/>
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
                      to="/about-us"
                      tag={Link}
                  >
                    {Constants.appStrings.aboutUs.aboutUs}
                  </DropdownItem>
                  <DropdownItem
                      to="/vision"
                      tag={Link}
                  >
                    {Constants.appStrings.aboutUs.vision}
                  </DropdownItem>
                  <DropdownItem
                      to="/managed-by"
                      tag={Link}
                  >
                    {Constants.appStrings.aboutUs.managedBy}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle aria-haspopup={true} caret color="default" nav>
                  <p>{Constants.appStrings.school.school}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                      to={Constants.subdomains.facilities}
                      tag={Link}
                  >
                    {Constants.appStrings.school.facilities}
                  </DropdownItem>
                  <DropdownItem
                      to={Constants.subdomains.educationalProgram}
                      tag={Link}
                  >
                    {Constants.appStrings.school.educationalProgram}
                  </DropdownItem>
                  <DropdownItem
                      to={Constants.subdomains.coScholasticActivities}
                      tag={Link}
                  >
                    {Constants.appStrings.school.coScholasticActivities}
                  </DropdownItem>
                  <DropdownItem
                      to={Constants.subdomains.eLearning}
                      tag={Link}
                  >
                    {Constants.appStrings.school.eLearning}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to={Constants.subdomains.contactUs} tag={Link}>
                  {Constants.appStrings.contactUs}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={Constants.subdomains.notices} tag={Link}>
                  {Constants.appStrings.notices}
                </NavLink>
              </NavItem>
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
