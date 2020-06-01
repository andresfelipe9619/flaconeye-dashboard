import React, { useEffect, useState } from "react";
// import ReportCard from "../report-card/ReportCard";
import EconomicCard from "./EconomicCard";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TecnicChart from "../tecnic-report/TecnicChart";
import HorizontalBarChart from "../horizontal-bar/HorizontalBarChart";
import barData from "../horizontal-bar/data";
import lineData from "../tecnic-report/data";
import { formatToUnits } from "../../utils";

export default function TecnicReport(props) {
  const { getData } = props;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const barKeys = ["contratado", "ejecutado"];
  const mockedValue = 113772;

  useEffect(() => {
    (async () => {
      try {
        let result = await getData();
        setData(result);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const colors = [
    "#009688",
    "#4caf50",
    "#3f51b5",
    "#03a9f4",
    "#f44336",
    "#ab47bc",
    "#cddc39",
    "#ff9800",
  ];
  if (loading) return <LinearProgress />;
  return (
    <Grid container spacing={3}>
      <Grid container spacing={6} item md={12}>
        {(tempData || []).map(
          (
            { title, percentage, accumulated, currentValue, currentDate },
            index
          ) => (
            <Grid container key={index} item md={4}>
              <EconomicCard
                {...{
                  title,
                  percentage,
                  accumulated,
                  currentValue,
                  currentDate,
                  titleColor: colors[index],
                }}
              />
            </Grid>
          )
        )}
      </Grid>
      <TecnicChart data={lineData} />
      <Grid container item md={12} alignItems="center" justify="center">
        <Grid item md={7}>
          <HorizontalBarChart data={barData} keys={barKeys} />
        </Grid>
        <Grid item md={5} style={{ padding: "15px" }}>
          <Grid item md={12} style={{ padding: "10px" }}>
            <TableCard data={tableData} />
          </Grid>
          <Grid item md={12}>
            <DividedCard below={mockedValue} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const DividedCard = ({ below }) => (
  <Card raised>
    <CardContent>
      <Typography align="center" variant="subtitle1" gutterBottom>
        Ejecutado total
      </Typography>
      <Divider />
      <Typography align="center" variant="subtitle2">
        {formatToUnits(below, 0)}
      </Typography>
    </CardContent>
  </Card>
);

const TableCard = ({ data }) => (
  <Card raised>
    <CardContent>
      <Typography align="center" variant="h6" gutterBottom>
        Ubicación más costosa
      </Typography>
      {(data || []).map(({ title, location, value }, index) => (
        <Grid container item md={12} key={index} style={{ marginTop: 10 }}>
          <Grid item md={4}>
            <Typography align="center" variant="body2" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center" variant="body2" gutterBottom>
              {location}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center" variant="body2" gutterBottom>
              {formatToUnits(value, 0)}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </CardContent>
  </Card>
);

const tableData = [
  {
    title: "Correctivo",
    location: "108 - Nuñez / Thomen",
    value: 3698,
  },
  {
    title: "Preventivo",
    location: "103 - Nuñez / 27 Febrero",
    value: 4986,
  },
  {
    title: "Ingeniería",
    location: "705 - Av. Mexico / Abreu",
    value: 7853,
  },
];

const tempData = [
  {
    title: "Centro de control",
    percentage: 10.0,
    accumulated: 387629,
    currentValue: 33398,
    currentDate: "Abril 2020",
  },
  {
    title: "Correctivo",
    percentage: 30.0,
    accumulated: 1273076,
    currentValue: 167510,
    currentDate: "Abril 2020",
  },
  {
    title: "Ingeniería",
    percentage: 60.0,
    accumulated: 4898004,
    currentValue: 2116597,
    currentDate: "Abril 2020",
  },
  {
    title: "Preventivo",
    percentage: 0,
    accumulated: 368647,
    currentValue: 0,
    currentDate: "Abril 2020",
  },
];
