import React from "react";
import { Center, H3, Text } from "./Titles.js";
import { Card, CardText, Col, Row } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, Marker, TileLayer } from "react-leaflet";
import Separator from "./Separator";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import SETTINGS from "../settings";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MarkerIcon = L.icon({
  iconUrl: require("../assets/img/marker.png"),
  iconSize: [32, 38],
  iconAnchor: [32, 32],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

const Hoover = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.light};
  padding: 20px 40px 15px 0;
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137);
  :hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    border: 1px solid #cccccc;
    background-color: white;
  }
`;

const AddressDetails = () => (
  <ul style={{ listStyleType: "none" }}>
    {" "}
    {SETTINGS.location.entreprise ? (
      <li>
        <FontAwesomeIcon icon={["fas", "address-book"]} />{" "}
        {SETTINGS.location.entreprise.url ? (
          <a href={SETTINGS.location.entreprise.url}>
            {" "}
            {SETTINGS.location.entreprise.name}
          </a>
        ) : (
          SETTINGS.location.entreprise
        )}
      </li>
    ) : null}
    <li>
      <FontAwesomeIcon icon={["fas", "road"]} />
      {` ${SETTINGS.location.number} ${SETTINGS.location.street}`}
    </li>
    <li>
      <FontAwesomeIcon icon={["fas", "street-view"]} />
      {` ${SETTINGS.location.CP} ${SETTINGS.location.town}`}
    </li>
    {SETTINGS.location.country ? (
      <li>
        <FontAwesomeIcon icon={["fas", "flag"]} />
        {` ${SETTINGS.location.country}`}
      </li>
    ) : null}
    {SETTINGS.location.phone ? (
      <li>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        {` ${SETTINGS.location.phone}`}
      </li>
    ) : null}
    {SETTINGS.location.bank ? (
      <li>
        <FontAwesomeIcon icon={["fas", "wallet"]} />
        {` ${SETTINGS.location.bank}`}
      </li>
    ) : null}
  </ul>
);

const Location = () => (
  <Map
    style={{ zIndex: -1, width: "100%", height: "500px" }}
    center={SETTINGS.location.position}
    zoom={16}
    zoomControl={false}
    attributionControl={false}
  >
    <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png" />
    <Marker position={SETTINGS.location.position} icon={MarkerIcon} />
  </Map>
);

export default ({ fullWidth, id }) => {
  const { t } = useTranslation();

  return (
    <div id={id}>
      {fullWidth ? <Separator title={t("mapFindUs")} /> : null}
      <section className="section section-lg section-shaped pg-250" id="#map">
        <div className="h-100">
          <Row className="align-items-center">
            {fullWidth ? (
              <>
                <Location />
                <Hoover>
                  <AddressDetails />
                </Hoover>
              </>
            ) : (
              <>
                <Col lg="6">
                  <Center>
                    <H3 className="text-center">
                      <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />{" "}
                      {t("mapFindUs")}
                    </H3>
                    <Text>
                      <AddressDetails />
                    </Text>
                    {SETTINGS.location.additional ? (
                      <Card body>
                        <CardText>
                          <Text>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: SETTINGS.location.additional,
                              }}
                            ></span>
                          </Text>
                        </CardText>
                      </Card>
                    ) : null}
                  </Center>
                </Col>
                <Col lg="6">
                  <Location />
                </Col>
              </>
            )}
          </Row>
        </div>
      </section>
    </div>
  );
};
