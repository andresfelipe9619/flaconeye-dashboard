import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "500px",
  },
  card: { minWidth: "100%" },
  bold: { fontWeight: "bold" },
}));

export default function TecnicChart({ style, data }) {
  const classes = useStyles();

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
        <div style={{ marginTop: "10px" }}>
          <Typography variant="h5" component="h1" align="center">
            % Ejecución de Actividades
          </Typography>
        </div>
        <CardContent>
          <Grid container className={classes.container}>
            <ResponsiveLine
              data={data}
              margin={{ top: 5, right: 110, bottom: 80, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
              }}
              enableSlices="x"
              curve="cardinal"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              colors={{ datum: "color" }}
              enablePoints={true}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabel="y"
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 50,
                  translateY: 60,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
            {/* <Grid item md={12}>
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
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

// const chartDataA = [
//   { x: "may-19", y: 2 },
//   { x: "jun-19", y: 4 },
//   { x: "jul-19", y: 5 },
//   { x: "ago-19", y: 9 },
//   { x: "sep-19", y: 13 },
//   { x: "oct-19", y: 14 },
//   { x: "nov-19", y: 15 },
//   { x: "dic-19", y: 18 },
//   { x: "ene-20", y: 20 },
//   { x: "feb-20", y: 22 },
//   { x: "mar-20", y: 27 },
// ];
// const chartDataB = [
//   { x: "may-19", y: 0 },
//   { x: "jun-19", y: 0 },
//   { x: "jul-19", y: 0 },
//   { x: "ago-19", y: 1 },
//   { x: "sep-19", y: 1 },
//   { x: "oct-19", y: 3 },
//   { x: "nov-19", y: 5 },
//   { x: "dic-19", y: 8 },
//   { x: "ene-20", y: 10 },
//   { x: "feb-20", y: 11 },
//   { x: "mar-20", y: 11 },
// ];
// const chartDataC = [
//   { x: "may-19", y: 2 },
//   { x: "jun-19", y: 5 },
//   { x: "jul-19", y: 8 },
//   { x: "ago-19", y: 10 },
//   { x: "sep-19", y: 12 },
//   { x: "oct-19", y: 14 },
//   { x: "nov-19", y: 15 },
//   { x: "dic-19", y: 15 },
//   { x: "ene-20", y: 19 },
//   { x: "feb-20", y: 21 },
//   { x: "mar-20", y: 22 },
// ];
// const chartDataD = [
//   { x: "may-19", y: 4 },
//   { x: "jun-19", y: 9 },
//   { x: "jul-19", y: 13 },
//   { x: "ago-19", y: 20 },
//   { x: "sep-19", y: 26 },
//   { x: "oct-19", y: 31 },
//   { x: "nov-19", y: 35 },
//   { x: "dic-19", y: 41 },
//   { x: "ene-20", y: 49 },
//   { x: "feb-20", y: 54 },
//   { x: "mar-20", y: 60 },
// ];
