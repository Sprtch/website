import React from "react";
import { Center } from "./Titles.js";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import SETTINGS from "../settings";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Center>
      <Form action={SETTINGS.contact.formspree} method="POST">
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="contactEmail"
            placeholder={t("contactEmail")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="subject"
            id="contactSubject"
            placeholder={t("contactSubject")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="contentArea"
            placeholder={t("contactContent")}
          />
        </FormGroup>
        <Button
          className="g-recaptcha"
          data-sitekey="6LcbW_EUAAAAALKdxfpxDKA59WL8vYJFoMHvJRwj"
          data-callback="onSubmit"
          block
        >
          {t("contactSend")}
        </Button>
      </Form>
    </Center>
  );
};

export default Contact;
