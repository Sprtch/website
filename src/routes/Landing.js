import React from "react";
import Slider from "react-slick";
import {
  Banner,
  Contact,
  Map,
  Preview,
  Separator,
  ThumbnailHolder,
} from "../components/";
import { H3, Text, Center } from "../components/Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterPosts } from "../utils/content";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Landing = () => {
  let SUMMARY_JSON = null;
  try {
    SUMMARY_JSON = require("../assets/posts/summary.json");
  } catch (e) {
    SUMMARY_JSON = { fileMap: [] };
  }

  const posts = filterPosts(SUMMARY_JSON);
  const { t } = useTranslation();

  return (
    <span>
      <Helmet>
        <title>
          {" "}
          {process.env.REACT_APP_WEBSITE_TITLE} - {t("welcomeTitle")}
        </title>
      </Helmet>
      <Banner />
      {posts.length ? (
        <Separator
          title={t("news")}
          background={require("../assets/img/banner1.jpg")}
          id="news"
        >
          <Slider
            infinite={true}
            slidesToShow={posts.length > 3 ? 3 : posts.length}
            dots={true}
          >
            {posts.map((post) => (
              <Preview {...post} />
            ))}
          </Slider>
        </Separator>
      ) : null}
      <Separator
        title={t("companySection")}
        background={require("../assets/img/banner2.jpg")}
        id="company"
      >
        <Row className="align-items-center">
          <Center>
            <Text>{t("companyText")}</Text>
          </Center>
        </Row>
      </Separator>
      <Separator
        title={t("productsSection")}
        background={require("../assets/img/banner3.jpg")}
        id="products"
      >
        <Row className="align-items-center">
          <Center>
            <Text>{t("productsSectionText")}</Text>
          </Center>
        </Row>
        <ThumbnailHolder
          content={[
            {
              title: t("productsSectionSetupSeparator"),
              img: require("../assets/img/products/1.jpg"),
              desc: t("productsSectionSetupSeparatorDesc"),
              full: true,
            },
            {
              title: t("productsSectionScreens"),
              img: require("../assets/img/products/2.jpg"),
              desc: t("productsSectionScreensDesc"),
              modal: t("productsSectionScreensDescModal"),
              full: true,
            },
            {
              title: t("productsSectionSpareParts"),
              img: require("../assets/img/products/3.jpg"),
              desc: t("productsSectionSparePartsDesc"),
              modal: t("productsSectionSparePartsDescModal"),
              full: true,
            },
            {
              title: t("productsSectionMachines"),
              img: require("../assets/img/products/4.jpg"),
              full: true,
            },
          ]}
          columns={2}
        />
      </Separator>
      <Separator
        title={t("applicationSection")}
        background={require("../assets/img/banner4.jpg")}
        id="applications"
      >
        <ThumbnailHolder
          content={[
            {
              title: t("industryAnimalFeed"),
              img: require("../assets/img/industries/animal.svg"),
              desc: t("industryAnimalFeedDesc"),
            },
            {
              title: t("industryRecycling"),
              img: ["fas", "recycle"],
              desc: t("industryRecyclingDesc"),
            },
            {
              title: t("industryMetal"),
              img: require("../assets/img/industries/steel.svg"),
              desc: t("industryMetalDesc"),
            },
            {
              title: t("industryPolymer"),
              img: require("../assets/img/industries/polymer.svg"),
              desc: t("industryPolymerDesc"),
            },
            {
              title: t("industryChemistry"),
              img: require("../assets/img/industries/chemistry.svg"),
              desc: t("industryChemistryDesc"),
            },
            {
              title: t("industryAutomotive"),
              img: ["fas", "plane"],
            },
            {
              title: t("industryFood"),
              img: require("../assets/img/industries/food.svg"),
            },
            {
              title: t("industryCoating"),
              img: ["fas", "paint-roller"],
            },
            {
              title: t("industryOils"),
              img: ["fas", "oil-can"],
              desc: t("industryOilsDesc"),
            },
            {
              title: t("industryCeramics"),
              img: require("../assets/img/industries/ceramic.svg"),
              desc: t("industryCeramicsDesc"),
            },
            {
              title: t("industryPharmaceutical"),
              img: ["fas", "prescription-bottle-alt"],
            },
            {
              title: t("industryMineral"),
              img: ["far", "gem"],
            },
            {
              title: t("industryFertilizers"),
              img: require("../assets/img/industries/fertilizer.svg"),
            },
          ]}
          columns={4}
        />
      </Separator>
      <Map fullWidth id="location" />
      <section className="section section-lg section-shaped pg-250 color-main">
        <div id="contact" className="h-100">
          <Row className="align-items-center">
            <Col lg="6">
              <Center className="font-white">
                <H3 className="text-center">
                  <FontAwesomeIcon icon={["fas", "address-card"]} />{" "}
                  {t("contact")}
                </H3>
                <Text></Text>
              </Center>
            </Col>
            <Col lg="6">
              <Contact />
            </Col>
          </Row>
        </div>
      </section>
    </span>
  );
};

export default Landing;
