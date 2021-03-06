import React from "react";
import Headroom from "react-headroom";
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import NavSocial from "./NavSocial";
import SETTINGS from "../settings";

const NavLink = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

const NavLinkD = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white dropdown-item" to={to}>
    {children}
  </NavHashLink>
);

const AppNavBar = () => {
  const { t } = useTranslation();
  return (
    <Headroom>
      <Navbar
        className="navbar-main navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <Link className="navbar-brand" to="/">
          <img
            alt={SETTINGS.title}
            src={require("../assets/img/logo_white.svg")}
          />
        </Link>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <UncontrolledDropdown>
              <DropdownToggle>SEPARTECH</DropdownToggle>
              <DropdownMenu>
                <NavLinkD to="/#news">{t("news")}</NavLinkD>
                <NavLinkD to="/#company">{t("companySection")}</NavLinkD>
                <NavLinkD to="/#products">{t("productsSection")}</NavLinkD>
                <NavLinkD to="/#applications">
                  {t("applicationSection")}
                </NavLinkD>
                <NavLinkD to="/#location">{t("mapFindUs")}</NavLinkD>
                <NavLinkD to="/#contact">{t("contact")}</NavLinkD>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/contact">{t("contact")}</NavLink>
            </NavItem>
            <NavSocial color="white" />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};

export default AppNavBar;
