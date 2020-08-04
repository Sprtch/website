import React from "react";
import { Button, Card, CardTitle, CardText, CardLink } from "reactstrap";
import { Link } from "react-router-dom";
import { H2, Text } from "./Titles.js";
import { useTranslation } from "react-i18next";

export default (props) => {
  const { t } = useTranslation();
  return (
    <Card body>
      <CardTitle className="text-center">
        <H2>{props.title}</H2>
      </CardTitle>
      <CardText>
        <Text>{props.brief}</Text>
      </CardText>
      <CardLink>
        <Link to={props.href}>
          <Button block>{t("readMore")}</Button>
        </Link>
      </CardLink>
    </Card>
  );
};
