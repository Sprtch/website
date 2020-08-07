import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { H1 } from "../components/Titles";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Page, PageHeightCenter } from "../components/Flex";

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
            <PageHeightCenter>
              <H1>{page.title}</H1>
            </PageHeightCenter>
          </Col>
          <Col lg="8">
            <Container style={{ paddingTop: "40px" }}>
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
