import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, LinearProgress } from "@material-ui/core";
import { formatToUnits } from "../../utils";
import { Route, Switch } from "react-router-dom";
import EconomicReport from "../economic-report/EconomicReport";
import TecnicReport from "../tecnic-report/TecnicReport";
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
    </Switch>
  );
}
