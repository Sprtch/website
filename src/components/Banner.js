import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(
      to right,
      ${(props) => rgba(props.theme.primary, 0.8)},
      ${(props) => rgba(props.theme.secondary, 0.8)}
    );
  }
`;

const Banner = () => {
  return (
    <header
      className="ui-section -hero section section-lg section-shaped pg-250"
      style={{
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
      }}
    >
      <Background className="align-items-center h-100 w-100">
        <video
          playinline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "100%",
            minHeight: "100%",
            zIndex: 0,
          }}
        >
          <source
            src={require("../assets/img/sprtch.webm")}
            type={"video/webm"}
          />
        </video>
        <div
          className="row align-items-center justify-content-center h-100"
          style={{ zIndex: 1 }}
        >
          <img
            className="img-fluid fade-in w-50"
            style={{
              padding: "0 50px",
              maxWidth: "80%",
              WebkitFilter: "drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5))",
              filter: "drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5))",
            }}
            src={require("../assets/img/logo_full_white.svg")}
            alt=""
          />
        </div>
      </Background>
    </header>
  );
};

export default Banner;
