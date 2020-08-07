import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import NavSocial from "./NavSocial";
import SETTINGS from "../settings";
import { Footer } from "../components/Flex";

export default () => {
  return (
    <Footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            {SETTINGS.title} © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem></NavItem>
              <NavSocial />
            </Nav>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};
