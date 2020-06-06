import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EconomicReport from "../economic-report/EconomicReport";
import TecnicReport from "../tecnic-report/TecnicReport";
import NewTecnicReport from "../tecnic-report/NewTecnicReport";
import NewEconomicReport from "../economic-report/NewEconomicReport";
import "react-vis/dist/style.css";
const API_URL = process.env.REACT_APP_API_URL;

const fetchAPI = async (endpoint) => {
  let response = await fetch(`${API_URL}/${endpoint}`);
  let jsonData = await response.json();
  return jsonData;
};

const getTechnicalReport = async () => {
  let response = await fetchAPI(`reports/technical`);
  return response;
};
const getTechnicalDeatilReport = async () => {
  let response = await fetchAPI(`reports/technical-detail`);
  return response;
};

const getEconomicReport = async () => {
  let response = await fetchAPI(`reports/economic`);
  return response;
};

const getEconomicDeatilReport = async () => {
  let response = await fetchAPI(`reports/economic-detail`);
  return response;
};

export default function Dashboard() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/prev-technical"
        render={(props) => (
          <TecnicReport getData={getTechnicalReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/economic"
        render={(props) => (
          <NewEconomicReport getData={getEconomicDeatilReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/prev-economic"
        render={(props) => (
          <EconomicReport getData={getEconomicReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/technical"
        render={(props) => (
          <NewTecnicReport getData={getTechnicalDeatilReport} {...props} />
        )}
      />
      <Redirect to="/technical" />
    </Switch>
  );
}
