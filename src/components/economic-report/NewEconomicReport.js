import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgressBar from "../circular-progress/CircularProgressBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AssistsRanking from "../tecnic-report/AssistsRanking";
import MarkedBarChart from "../mark-bar-chart/MarkedBarChart";
import markBarData from "../mark-bar-chart/data";
import assistData from "../economic-report/assistData";
import { formatToUnits } from "../../utils";

export default function NewEconomicReport(props) {
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

  if (loading) return <LinearProgress />;
  return (
    <Grid container item md={12} spacing={3}>
      <Grid container item md={5}>
        {markBarData.map((item, i) => (
          <Grid item md={12} key={i}>
            <MarkedBarChart
              data={item.indexes}
              title={item.title}
              color={item.color}
              media={item.media}
              keys={["value"]}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container item md={7} justify="space-around">
        {reportData.map(
          (
            { percentage, pendingValue, pendingName, proName, conName },
            index
          ) => (
            <Grid
              item
              md={6}
              container
              key={index}
              spacing={3}
              diirection="column"
            >
              <DividedCard above={conName} below={proName} hasColors />
              <Grid item md={12}>
                <Card raised>
                  <CardContent>
                    <CircularProgressBar
                      colors={{ con: "#f44336", pro: "#4caf50" }}
                      data={[
                        {
                          id: "con",
                          label: conName,
                          value: 100 - percentage,
                        },
                        {
                          id: "pro",
                          label: proName,
                          value: percentage,
                        },
                      ]}
                      text={`${percentage}%`}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <DividedCard above={pendingName} below={pendingValue} hasNumber />
            </Grid>
          )
        )}
      </Grid>
      <Grid container item md={12} justify="center" style={{ marginTop: 50 }}>
        <Typography variant="h3" align="center" style={numberStyle}>
          Ranking de consumo
        </Typography>
      </Grid>
      {assistData.map((item, i) => (
        <Grid container item md={4} key={i}>
          <AssistsRanking
            data={item.indexes}
            keys={["value"]}
            color={item.color}
            title={item.title}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const DividedCard = ({ above, below, hasNumber, hasColors }) => (
  <Grid item md={12} style={{ margin: "10px 0px" }}>
    <Card raised>
      <CardContent>
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          style={{ ...titleStyle, ...(hasColors ? colorRed : null) }}
        >
          {above}
        </Typography>
        <Divider />
        {hasNumber ? (
          <Typography align="center" variant="h3" style={numberStyle}>
            {below}
          </Typography>
        ) : (
          <Typography
            align="center"
            variant="h3"
            style={{ ...titleStyle, ...(hasColors ? colorGreen : null) }}
          >
            {below}
          </Typography>
        )}
      </CardContent>
    </Card>
  </Grid>
);

const numberStyle = {
  fontSize: 20,
  marginTop: 10,
  fontWeight: "bold",
};

const colorGreen = { color: "#4caf50", fontWeight: "bold" };
const colorRed = { color: "#f44336", fontWeight: "bold" };

const titleStyle = { fontSize: 18, marginTop: 10 };

const reportData = [
  {
    proName: "Presupuesto",
    conName: "Ejecutado",
    pendingName: "Disponibilidad",
    pendingValue: formatToUnits(1000, 0),
    percentage: 33,
  },
  {
    proName: "Correctivo",
    conName: "Ejecutado",
    pendingName: "Disponibilidad",
    pendingValue: formatToUnits(1000, 0),
    percentage: 50,
  },
  {
    proName: "Preventivo",
    conName: "Ejecutado",
    pendingName: "Disponibilidad",
    pendingValue: formatToUnits(1000, 0),
    percentage: 70,
  },
  {
    proName: "Ingeniería",
    conName: "Ejecutado",
    pendingName: "Disponibilidad",
    pendingValue: formatToUnits(1000, 0),
    percentage: 60,
  },
];
