import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { ResponsiveBar } from "@nivo/bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "350px",
  },
  card: { minWidth: "100%" },
  bold: { fontWeight: "bold" },
}));

export default function AssistsRanking({ data, color, keys, title }) {
  const classes = useStyles();
  return (
    <Card raised className={classes.card}>
      {title ? (
        <div style={{ marginTop: "10px" }}>
          <Typography variant="h5" component="h1" align="center">
            {title}
          </Typography>
        </div>
      ) : null}
      <CardContent>
        <Grid container className={classes.container}>
          <ResponsiveBar
            layout="horizontal"
            data={data}
            keys={keys}
            indexBy="id"
            margin={{ top: 5, right: 10, bottom: 80, left: 40 }}
            padding={0.1}
            innerPadding={4}
            colors={color}
            groupMode="grouped"
            enableGridY={false}
            enableGridX={true}
            enableLabel={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 0,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[]}
            tooltip={({ indexValue, value }) => {
              return (
                <strong>
                  Ubicación {indexValue}: {value} Asistencias
                </strong>
              );
            }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
