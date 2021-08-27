import React, { useState } from "react";
import { InputContainer } from "./style";
import PropTypes from "prop-types";

const InputRange = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const handleOnChange = (event) => {
    setValue(event.target.value);
    const percentValue = ((event.target.value - props.minValue) * 100) / (props.maxValue - props.minValue);
    const percentModifier = -(((2 / 100) * percentValue - 1) * parseInt(props.thumbWidth, 10)) / 2;
    event.target.style.backgroundSize = `calc(${percentValue}% + ${percentModifier}px) 100%`;
  };

  return (
    <InputContainer
      thumbColor={props.thumbColor}
      thumbWidth={props.thumbWidth}
      thumbHeight={props.thumbHeight}
      thumbBorder={props.thumbBorder}
      thumbOutline={props.thumbOutline}
      thumbBorderRadius={props.thumbBorderRadius}
      trackBackgroundColor={props.trackBackgroundColor}
      trackProgressColor={props.trackProgressColor}
      trackWidth={props.trackWidth}
      trackHeight={props.trackHeight}
      trackBorder={props.trackBorder}
      trackOutline={props.trackOutline}
      trackBorderRadius={props.trackBorderRadius}
    >
      <input
        type="range"
        min={props.minValue}
        max={props.maxValue}
        value={value}
        step={props.step}
        list={props.list}
        className="slider"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      {props.hasLabel && <div className="label">{value}</div>}
    </InputContainer>
  );
};

InputRange.propTypes = {
  initialValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  list: PropTypes.element,
  hasLabel: PropTypes.bool,
  thumbColor: PropTypes.string,
  thumbWidth: PropTypes.string,
  thumbHeight: PropTypes.string,
  thumbBorder: PropTypes.string,
  thumbOutline: PropTypes.string,
  thumbBorderRadius: PropTypes.string,
  trackWidth: PropTypes.string,
  trackHeight: PropTypes.string,
  trackBackgroundColor: PropTypes.string,
  trackProgressColor: PropTypes.string,
  trackBorder: PropTypes.string,
  trackOutline: PropTypes.string,
  trackBorderRadius: PropTypes.string,
};
InputRange.defaultProps = {
  initialValue: 0,
  minValue: 0,
  maxValue: 100,
  step: 1,
  list: <></>,
  hasLabel: true,
  thumbColor: "#007CF8",
  thumbWidth: "11px",
  thumbHeight: "11px",
  thumbBorder: "none",
  thumbOutline: "none",
  thumbBorderRadius: "10px",
  trackBackgroundColor: "white",
  trackProgressColor: "#007CF8",
  trackWidth: "100%",
  trackHeight: "3px",
  trackBorder: "none",
  trackOutline: "none",
  trackBorderRadius: "3px",
};

export default InputRange;
