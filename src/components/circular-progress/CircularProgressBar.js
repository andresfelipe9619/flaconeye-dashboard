import React from "react";
import { ResponsivePie } from "@nivo/pie";

const margin = { top: 0, right: 80, bottom: 0, left: 20 };

const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 300,
    height: 250,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#555",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none",
  },
};

const theme = {
  background: "white",
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#555555",
    },
  },
};

const CircularProgressBar = ({ data, colors, text }) => {
  const getColor = (item) => colors[item.id];

  return (
    <div style={styles.root}>
      <ResponsivePie
        margin={margin}
        data={data}
        colors={getColor}
        innerRadius={0.8}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        theme={theme}
      />
      <div style={styles.overlay}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
