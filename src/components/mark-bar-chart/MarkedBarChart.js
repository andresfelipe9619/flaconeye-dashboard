import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { ResponsiveBar } from "@nivo/bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "250px",
  },
  card: { minWidth: "100%" },
  bold: { fontWeight: "bold" },
}));

const MarkedBarChart = ({ data, keys, title, color, media }) => {
  const classes = useStyles();
  return (
    <Card raised className={classes.card}>
      <div style={{ marginTop: "10px" }}>
        <Typography variant="h5" component="h1" align="center">
          {title}
        </Typography>
      </div>
      <CardContent>
        <Grid container className={classes.container}>
          <ResponsiveBar
            layout="vertical"
            data={data}
            keys={keys}
            indexBy="date"
            margin={{ top: 10, right: 30, bottom: 80, left: 50 }}
            padding={0.4}
            innerPadding={3}
            colors={color}
            groupMode="grouped"
            enableGridY={false}
            enableGridX={true}
            enableLabel={false}
            markers={[
              {
                axis: "y",
                value: media,
                legend: "",
                legendOrientation: 'vertical',
                lineStyle: {
                  stroke: "red",
                  strokeWidth: 3,
                },
                textStyle: {
                  fill: "red",
                },
                anchor: "bottom",
              },
            ]}
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
              tickPadding: 12,
              tickRotation: -55,
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
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 15,
                translateY: 75,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MarkedBarChart;
