import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import TecnicChart from "./TecnicChart";
import CircularProgressBar from "../circular-progress/CircularProgressBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AssistsRanking from "./AssistsRanking";
export default function NewTecnicReport(props) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LinearProgress />;
  return (
    <Grid container spacing={4} justify="center">
      <Grid container spacing={6} item md={12} justify="center">
        {((data || {}).pieData || []).map(
          (
            {
              proName,
              conName,
              pendingName,
              pendingValue,
              proPercentage,
              conPercentage,
            },
            index
          ) => {
            if (!proName && !conName) return null;
            return (
              <Grid
                item
                md={4}
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
                            id: "pro",
                            label: proName,
                            value: proPercentage,
                          },
                          {
                            id: "con",
                            label: conName,
                            value: conPercentage,
                          },
                        ]}
                        text={`${proPercentage}%`}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <DividedCard
                  above={pendingName}
                  below={pendingValue}
                  hasNumber
                />
              </Grid>
            );
          }
        )}
      </Grid>
      <TecnicChart
        style={{ marginLeft: 15, marginRight: 25 }}
        data={(data || {}).lineData || []}
      />
      <Grid item md="12">
        <Typography variant="h3" align="center" style={numberStyle}>
          Ranking de Asistencias
        </Typography>
      </Grid>
      {rankings.map((title, i) => (
        <Grid container item md={4} key={i}>
          <AssistsRanking />
          <Typography
            align="center"
            variant="h3"
            style={{ ...numberStyle, marginLeft: 30 }}
          >
            {title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

const DividedCard = ({ above, below, hasNumber, hasColors }) => (
  <Grid item md={12}>
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

const rankings = ["Correctivo", "Preventivo", "Ingeniería"];
