import React from "react";
import PropTypes from "prop-types";
import "./circular-progress.css";

function CircularProgressBar(props) {
  const squareSize = props.squareSize;
  const strokeWidth = squareSize / 10;
  const radius = (squareSize - strokeWidth) / 2;
  const viewBox = `0 0 ${squareSize} ${squareSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.value) / 100;
  return (
    <>
      <svg width={"100%"} viewBox={viewBox} height={squareSize}>
        <circle
          className="circle-background"
          cx={squareSize / 2}
          cy={squareSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={squareSize / 2}
          cy={squareSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${squareSize / 2} ${props.squareSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          {...props["data-cy"] && { "data-cy": props["data-cy"] }}
        >
          {`${props.text}`}
        </text>
      </svg>
      <p className="titleBar">{props.title}</p>
    </>
  );
}

CircularProgressBar.defaultProps = {
  squareSize: 300,
  value: 25
};

CircularProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default CircularProgressBar;
