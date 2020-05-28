import React from "react";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  FlexibleWidthXYPlot,
  DiscreteColorLegend,
} from "react-vis";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function TecnicChart({ style }) {
  return (
    <Grid
      item
      container
      md={12}
      style={{
        background: "white",
        marginTop: 25,

        ...style,
      }}
    >
      <Card raised style={{ width: "100%" }}>
        <CardContent>
          <Grid container>
            <Grid item md={12}>
              <FlexibleWidthXYPlot animation height={400} xType="ordinal">
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries data={chartDataA} />
                <LineMarkSeries data={chartDataB} />
                <LineMarkSeries data={chartDataC} />
                <LineMarkSeries data={chartDataD} />
              </FlexibleWidthXYPlot>
            </Grid>
            <Grid container justify="center" item md={12}>
              <DiscreteColorLegend
                orientation="horizontal"
                width={400}
                items={["Correctivo", "Preventivo", "Ingeniería", "Total"]}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const chartDataA = [
  { x: "may-19", y: 2 },
  { x: "jun-19", y: 4 },
  { x: "jul-19", y: 5 },
  { x: "ago-19", y: 9 },
  { x: "sep-19", y: 13 },
  { x: "oct-19", y: 14 },
  { x: "nov-19", y: 15 },
  { x: "dic-19", y: 18 },
  { x: "ene-20", y: 20 },
  { x: "feb-20", y: 22 },
  { x: "mar-20", y: 27 },
];
const chartDataB = [
  { x: "may-19", y: 0 },
  { x: "jun-19", y: 0 },
  { x: "jul-19", y: 0 },
  { x: "ago-19", y: 1 },
  { x: "sep-19", y: 1 },
  { x: "oct-19", y: 3 },
  { x: "nov-19", y: 5 },
  { x: "dic-19", y: 8 },
  { x: "ene-20", y: 10 },
  { x: "feb-20", y: 11 },
  { x: "mar-20", y: 11 },
];
const chartDataC = [
  { x: "may-19", y: 2 },
  { x: "jun-19", y: 5 },
  { x: "jul-19", y: 8 },
  { x: "ago-19", y: 10 },
  { x: "sep-19", y: 12 },
  { x: "oct-19", y: 14 },
  { x: "nov-19", y: 15 },
  { x: "dic-19", y: 15 },
  { x: "ene-20", y: 19 },
  { x: "feb-20", y: 21 },
  { x: "mar-20", y: 22 },
];
const chartDataD = [
  { x: "may-19", y: 4 },
  { x: "jun-19", y: 9 },
  { x: "jul-19", y: 13 },
  { x: "ago-19", y: 20 },
  { x: "sep-19", y: 26 },
  { x: "oct-19", y: 31 },
  { x: "nov-19", y: 35 },
  { x: "dic-19", y: 41 },
  { x: "ene-20", y: 49 },
  { x: "feb-20", y: 54 },
  { x: "mar-20", y: 60 },
];
