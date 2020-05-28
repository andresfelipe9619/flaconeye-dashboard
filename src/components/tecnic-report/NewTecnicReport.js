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
  }, []);

  if (loading) return <LinearProgress />;
  return (
    <Grid container spacing={4} justify="center">
      <Grid container spacing={6} item md={12} justify="center">
        {reportData.map(
          (
            { percentage, pendingValue, pendingName, proName, conName },
            index
          ) => (
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
                      squareSize={150}
                      value={percentage}
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
      <TecnicChart style={{ marginLeft: 15, marginRight: 25 }} />
      {/* <Typography variant="h3" style={numberStyle}>
        Rankings
      </Typography> */}
      {rankings.map((title) => (
        <Grid container item md={4}>
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
          style={{ ...titleStyle, ...(hasColors ? colorGreen : null) }}
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
            style={{ ...titleStyle, ...(hasColors ? colorRed : null) }}
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

const reportData = [
  {
    proName: "Autorizadas",
    conName: "Solicitudes",
    pendingName: "Pediente de Autorizar",
    pendingValue: 15,
    percentage: 33,
  },
  {
    proName: "Ejecutadas",
    conName: "Autorizadas",
    pendingName: "Pediente de Ejecutar",
    pendingValue: 13,
    percentage: 70,
  },
  {
    proName: "Aprobadas",
    conName: "Ejecutadas",
    pendingName: "Pediente de Aprobar",
    pendingValue: 20,
    percentage: 50,
  },
];
