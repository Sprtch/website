import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ThumbnailCard = styled(Card)`
  margin: 10px 10px;
  padding: 0px;
  border: 1px solid ${(props) => props.theme.primary};
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137);
  background-color: ${(props) => props.theme.lightest};
  :hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    border: 1px solid #cccccc;
    background-color: white;
  }
`;

const ThumbnailTitle = styled(CardTitle)`
  text-align: center;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  color: ${(props) => props.theme.primary};
  ${(props) =>
    props.desc ? `border-bottom: 1px solid ${props.theme.primary};` : null}
  padding-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 20pt;
  }
`;

const ThumbnailImg = styled(CardImg)`
  padding: 0 !important;
  width: 100%;
  height: 350px;
  box-shadow: 0px 0px 130px 0 rgba(0, 0, 0, 0.38);
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 50% 50%;
  object-position: 50% 50%;
`;

const ThumbnailLogo = styled(CardImg)`
  padding: 10px 0;
  text-align: center;
  min-height: 100px;
  max-height: 100px;
  color: ${(props) => props.theme.primary};
`;

const ThumbnailSection = styled.div`
  padding: 20px 0;
  margin: auto;
  width: 60%;

  @media (max-width: 1280px) {
    width: 85%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }
`;

const Thumbnail = ({ title, img, desc, button, full, modal }) => {
  const [modalState, setModal] = useState(false);
  const toggle = () => setModal(!modalState);
  const { t } = useTranslation();

  return (
    <>
      {modal ? (
        <Modal isOpen={modalState} toggle={toggle}>
          <ModalHeader toggle={toggle}>{t("moreInfo")}</ModalHeader>
          <ModalBody>{modal}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              {t("close")}
            </Button>{" "}
          </ModalFooter>
        </Modal>
      ) : null}
      <ThumbnailCard className="h-100">
        {Array.isArray(img) ? (
          <ThumbnailLogo
            tag={FontAwesomeIcon}
            style={{
              width: "100%",
            }}
            icon={img}
            top
          />
        ) : full ? (
          <ThumbnailImg src={img} top />
        ) : (
          <ThumbnailLogo
            style={{
              filter:
                "invert(81%) sepia(25%) saturate(389%) hue-rotate(116deg) brightness(91%) contrast(79%)",
            }}
            src={img}
            top
          />
        )}
        <CardBody>
          <ThumbnailTitle desc={desc}>{title}</ThumbnailTitle>
          {desc ? <CardText>{desc}</CardText> : null}
          {modal ? (
            <Button color="primary" onClick={toggle} block>
              {t("moreInfo")}
            </Button>
          ) : null}
        </CardBody>
      </ThumbnailCard>
    </>
  );
};

export default ({ content, columns }) => {
  const rows = new Array(Math.ceil(content.length / columns))
    .fill()
    .map((_) => content.splice(0, columns));

  return (
    <ThumbnailSection>
      <Row>
        {rows.map((row) =>
          row.map((x) => (
            <Col className="py-2" xs="12" md={Math.floor(12 / columns)}>
              <Thumbnail {...x} />
            </Col>
          ))
        )}
      </Row>
    </ThumbnailSection>
  );
};
