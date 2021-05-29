import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomesList } from "../pages/homes-list/HomesList";
import { Navbar } from "../components/nav/Navbar";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import messages from "../i18n/messages";
import HomeDevices from "../pages/home-devices/HomeDevices"

export const AppRouter = () => {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Navbar setLanguage={setLanguage}></Navbar>
        <Switch>
          <Route exact path="/">
            <HomesList />
          </Route>
          <Route exact path="/homes">
            <HomesList />
          </Route>
          <Route exact path="/homes/:id">
            <HomeDevices />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};
