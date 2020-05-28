import React from "react";
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalBarSeries,
  FlexibleWidthXYPlot,
} from "react-vis";
import Grid from "@material-ui/core/Grid";
export default function AssistsRanking() {
  return (
    <Grid item md={12}>
      <FlexibleWidthXYPlot
        xDomain={[0, 100]}
        animation
        height={400}
        stackBy="x"
      >
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={chartData} />
      </FlexibleWidthXYPlot>
    </Grid>
  );
}
const chartData = [
  { x: 60, y: 1 },
  { x: 60, y: 2 },
  { x: 60, y: 3 },
  { x: 65, y: 4 },
  { x: 70, y: 5 },
  { x: 70, y: 6 },
  { x: 75, y: 7 },
  { x: 80, y: 8 },
  { x: 85, y: 9 },
  { x: 85, y: 10 },
];
