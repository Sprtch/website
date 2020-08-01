import React from "react";
import { Gradient } from "./Images.js";
import { Row } from "reactstrap";

export default () => {
  return (
    <section
      className="ui-section -hero section section-lg section-shaped pg-250 color-main"
      style={{
        "background-size": "cover",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
      }}
    >
      <Row className="align-items-center h-100 w-100 color-main">
        <Gradient className="w-100 text-center d-none d-sm-block">
          <img
            className="img-fluid fade-in w-50"
            style={{ padding: "0 50px", maxWidth: "80%" }}
            src={require("../assets/img/logo_full.svg")}
            alt=""
          />
        </Gradient>
      </Row>
    </section>
  );
};
