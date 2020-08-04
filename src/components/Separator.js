import React from "react";
import { H1 } from "./Titles.js";
import { Row } from "reactstrap";
import styled from "styled-components";
import { rgba } from "polished";

export const Sep = styled.div`
  font-weight: 200;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    rgba(props.theme.primary, props.background ? 0.4 : 1)};

  @media (max-width: 480px) {
    padding: 40px 15px;
  }

  @media (min-width: 480px) {
    padding: 80px 15px;
  }
`;

export default ({ title, background, id, children }) => {
  const style = background
    ? { backgroundImage: "url(" + background + ")" }
    : {};
  return (
    <div id={id}>
      <div style={style}>
        <Sep background={background} className="h-100">
          <Row className="align-items-center text-center w-100">
            <H1 className="w-100">{title}</H1>
          </Row>
        </Sep>
      </div>
      {children ? (
        <section className="section section-lg section-shaped pg-250">
          {children}
        </section>
      ) : null}
    </div>
  );
};
