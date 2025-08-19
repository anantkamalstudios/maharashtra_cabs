import React from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const CounterUp = ({ count, duration = 5000 }) => {
  return (
    <Odometer
      value={count}
      format="d"
      duration={duration}
      animation="count"
      className="odometer"
    />
  );
};

export default CounterUp;
