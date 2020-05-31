import React, { useEffect, useState } from "react";
import ReportCard from "../report-card/ReportCard";
import MostVisitedCard from "../report-card/MostVisitedCard";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import TecnicChart from "../tecnic-report/TecnicChart";
import HorizontalBarChart from "../horizontal-bar/HorizontalBarChart";
import barData from "../horizontal-bar/data";
import lineData from "../tecnic-report/data";

export default function TecnicReport(props) {
  const { getData } = props;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const barKeys = ["contratado", "ejecutado"];
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
                  titleColor: colors[index],
                }}
              />
            </Grid>
          )
        )}
      </Grid>
      <TecnicChart data={lineData} />
      <Grid container item md={12} alignItems="center" justify="center">
        <Grid item md={8}>
          <HorizontalBarChart data={barData} keys={barKeys} />
        </Grid>
        <Grid item md={4}>
          <MostVisitedCard data={data.mostVisited || []} />
        </Grid>
      </Grid>
    </Grid>
  );
}
