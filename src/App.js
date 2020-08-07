import React, { Suspense } from "react";
import { Spinner } from "reactstrap";
import { Footer, Navbar } from "./components/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import far from "@fortawesome/fontawesome-free-regular";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import { Contact, Landing, NotFound, Post } from "./routes";
import { Root } from "./components/Flex";

import "./assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n";

library.add(fab);
library.add(fas);
library.add(far);

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/css/variables.scss'); // eslint-disable-line

export default () => {
  return (
    <Router basename="/website">
      <ThemeProvider theme={theme}>
        <Helmet></Helmet>

        <Root>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Suspense fallback={<Spinner />}>
                <Landing />
              </Suspense>
            </Route>
            <Route path="/Contact" exact>
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            </Route>
            <Route path="/posts/:article">
              <Suspense fallback={<Spinner />}>
                <Post />
              </Suspense>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Root>
      </ThemeProvider>
    </Router>
  );
};
