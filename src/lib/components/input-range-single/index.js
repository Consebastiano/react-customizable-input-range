import React, { useState } from "react";
import { InputContainer } from "./style";

const InputRange = (props) => {
  const initialValues = { minValue: props.initialMinValue || 0, maxValue: props.initialMaxValue || 0 };
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (event) => {
    setValues({ ...values, maxValue: event.target.value });
    event.target.style.backgroundSize =
      ((event.target.value - (props.minValue || 0)) * 100) / ((props.maxValue || 100) - (props.minValue || 0)) + "% 100%";
  };

  return (
    <InputContainer
      thumbColor={props.thumbColor || "#007CF8"}
      thumbWidth={props.thumbWidth || "11px"}
      thumbHeight={props.thumbHeight || "11px"}
      thumbBorder={props.thumbBorder || "none"}
      thumbOutline={props.thumbOutline || "none"}
      thumbBorderRadius={props.thumbBorderRadius || "10px"}
      trackBackgroundColor={props.trackBackgroundColor || "white"}
      trackProgressColor={props.trackProgressColor || "#007CF8"}
      trackWidth={props.trackWidth || "100%"}
      trackHeight={props.trackHeight || "3px"}
      trackBorder={props.trackBorder || "none"}
      trackOutline={props.trackOutline || "none"}
      trackBorderRadius={props.trackBorderRadius || "3px"}
    >
      <input
        type="range"
        min={props.minValue || 0}
        max={props.maxValue || 100}
        value={values?.maxValue}
        step={props.step || 1}
        list={props.list}
        className="slider"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <div className="value">{values?.maxValue}</div>
    </InputContainer>
  );
};
export default InputRange;
