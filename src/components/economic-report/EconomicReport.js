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
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function EconomicReport(props) {
  const { getData } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await getData();
      setData(result);
    })();
  }, []);
  return (
    <Grid container spacing={4}>
      <Typography variant="h4" component="h1">
        Economic Report
      </Typography>
      <Grid container spacing={6} item md={12}>
        {data.map(
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
      <Grid container item md={12}>
        <XYPlot xType="linear" width={800} height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <LineSeries
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
              { x: 4, y: 12 },
            ]}
          />
          <LineSeries data={null} />
          <LineSeries
            data={[
              { x: 1, y: 10 },
              { x: 2, y: 4 },
              { x: 4, y: 2 },
              { x: 5, y: 15 },
            ]}
          />
        </XYPlot>
      </Grid>
    </Grid>
  );
}

const Legend = ({ items }) => {
  return (
    <div
      className={"trendsLegends"}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minMax(50%, 1fr))",
      }}
    >
      {items.map((item, index) => (
        <span key={`${item.name}_${index}`} title={item.name}>
          <DiscreteColorLegend
            items={[{ title: item.name, color: item.color }]}
            orientation="horizontal"
            style={{
              textAlign: "left",
            }}
            className={"trends-label-item-container"}
          />
        </span>
      ))}
    </div>
  );
};
