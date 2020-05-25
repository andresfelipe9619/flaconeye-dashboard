import React, { useEffect, useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineMarkSeries,
  Crosshair,
  FlexibleWidthXYPlot,
  DiscreteColorLegend,
} from "react-vis";
import ReportCard from "../report-card/ReportCard";
import MostVisitedCard from "../report-card/MostVisitedCard";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function TecnicReport(props) {
  const { getData } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let result = await getData();
      setData(result);
    })();
  }, []);

  return (
    <Grid container spacing={3}>
      <Typography variant="h5" component="h1">
        Tecnic Report
        <Divider variant="fullWidth" />
      </Typography>
      <Grid container spacing={6} item md={12}>
        {(data.kpi || []).map(
          (
            { title, percentage, accumulated, currentValue, currentDate },
            index
          ) => (
            <Grid container key={index} item md={3}>
              <ReportCard
                {...{
                  title,
                  percentage,
                  accumulated,
                  currentValue,
                  currentDate,
                }}
              />
            </Grid>
          )
        )}
      </Grid>
      <Grid
        container
        style={{
          background: "white",
          margin: 10,
        }}
      >
        <Grid container justify="center" item md={10}>
          <FlexibleWidthXYPlot animation height={400}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <LineSeries data={chartDataA} />
            <LineSeries data={chartDataB} />
            <LineSeries data={chartDataC} />
            <LineSeries data={chartDataD} />
          </FlexibleWidthXYPlot>
        </Grid>
        <Grid container justify="center" item md={2}>
          <DiscreteColorLegend
            width={300}
            items={["Correctivo", "Preventivo", "Ingeniería", "Total"]}
          />
        </Grid>
      </Grid>
      <Grid container item md={8} alignItems="center">
        <MostVisitedCard data={data.mostVisited || []} />
      </Grid>
    </Grid>
  );
}

const chartDataA = [
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 5 },
  { x: 4, y: 9 },
  { x: 5, y: 13 },
  { x: 6, y: 14 },
  { x: 7, y: 15 },
  { x: 8, y: 18 },
  { x: 9, y: 20 },
  { x: 10, y: 22 },
  { x: 11, y: 27 },
];
const chartDataB = [
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 6, y: 3 },
  { x: 7, y: 5 },
  { x: 8, y: 8 },
  { x: 9, y: 10 },
  { x: 10, y: 11 },
  { x: 11, y: 11 },
];
const chartDataC = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 8 },
  { x: 4, y: 10 },
  { x: 5, y: 12 },
  { x: 6, y: 14 },
  { x: 7, y: 15 },
  { x: 8, y: 15 },
  { x: 9, y: 19 },
  { x: 10, y: 21 },
  { x: 11, y: 22 },
];
const chartDataD = [
  { x: 1, y: 4 },
  { x: 2, y: 9 },
  { x: 3, y: 13 },
  { x: 4, y: 20 },
  { x: 5, y: 26 },
  { x: 6, y: 31 },
  { x: 7, y: 35 },
  { x: 8, y: 41 },
  { x: 9, y: 49 },
  { x: 10, y: 54 },
  { x: 11, y: 60 },
];
