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

const geteEconomicReport = async () => {
  let response = await fetchAPI(`reports/economic`);
  return response;
};

export default function Dashboard() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/tecnic"
        render={(props) => (
          <TecnicReport getData={getTechnicalReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/economic_new"
        render={(props) => (
          <NewEconomicReport getData={getTechnicalReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/economic"
        render={(props) => (
          <EconomicReport getData={getTechnicalReport} {...props} />
        )}
      />
      <Route
        exact
        strict
        path="/tecnic_new"
        render={(props) => (
          <NewTecnicReport getData={getTechnicalDeatilReport} {...props} />
        )}
      />
      <Redirect to="/tecnic" />
    </Switch>
  );
}
