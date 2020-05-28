import React from "react";
import { Route, Switch } from "react-router-dom";
import EconomicReport from "../economic-report/EconomicReport";
import TecnicReport from "../tecnic-report/TecnicReport";
import NewTecnicReport from "../tecnic-report/NewTecnicReport";
import "react-vis/dist/style.css";
const API_URL = process.env.REACT_APP_API_URL;

const getTecnicReport = async () => {
  let response = await fetch(`${API_URL}/reports/tecnic`);
  let jsonData = await response.json();
  return jsonData;
};

const geteEconomicReport = async () => {
  let response = await fetch(`${API_URL}/reports/economic`);
  let jsonData = await response.json();
  return jsonData;
};

export default function Dashboard() {
  return (
    <Switch>
      <Route
        path="/economic"
        render={(props) => (
          <EconomicReport getData={getTecnicReport} {...props} />
        )}
      />
      <Route
        path="/tecnic"
        render={(props) => (
          <TecnicReport getData={getTecnicReport} {...props} />
        )}
      />
      <Route
        path="/tecnic_new"
        render={(props) => (
          <NewTecnicReport getData={getTecnicReport} {...props} />
        )}
      />
    </Switch>
  );
}
