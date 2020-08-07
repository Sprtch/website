import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { H3 } from "../components/Titles";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Page } from "../components/Flex";

export default withRouter((props) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (props.match.params && props.match.params.article) {
      try {
        setPage(require(`../assets/posts/${props.match.params.article}.json`));
      } catch (e) {
        props.history.replace("/404");
      }
    }
  }, [props.match.params, props.history]);

  if (page) {
    return (
      <Page>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <Row className="w-100 h-100" style={{ alignItems: "center" }}>
          <Col
            lg="4"
            className="color-main font-white"
            style={{
              alignSelf: "stretch",
            }}
          >
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <H3>{page.title}</H3>
            </div>
          </Col>
          <Col lg="8">
            <Container>
              <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }}></div>
            </Container>
          </Col>
        </Row>
      </Page>
    );
  } else {
    return (
      <Container className="text-center">
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </Container>
    );
  }
});
