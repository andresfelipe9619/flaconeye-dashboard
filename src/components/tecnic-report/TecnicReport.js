import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineMarkSeries,
  FlexibleWidthXYPlot,
  DiscreteColorLegend,
} from "react-vis";
import ReportCard from "../report-card/ReportCard";
import MostVisitedCard from "../report-card/MostVisitedCard";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function TecnicReport(props) {
  const { getData } = props;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
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
  }, []);
  const colors = ["#5cb860", "#ffa21a", "#f55a4e", "#00d3ee"];
  if (loading) return <LinearProgress />;
  return (
    <Grid container spacing={3}>
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
                  titleColor: colors[index <= 3 ? index : index - 4],
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
