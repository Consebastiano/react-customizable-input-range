import React, { useState } from "react";
import { InputContainer  } from "./style";

const InputRange = (props) => {
  const initialValues = { minValue: props.initialMinValue || 0, maxValue: props.initialMaxValue || 0 };
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (event) => {setValues({ ...values, maxValue: event.target.value })
  event.target.style.backgroundSize = (event.target.value - (props.minValue || 0)) * 100 / ((props.maxValue || 100) - (props.minValue || 0)) + '% 100%'
};

  return (
    <InputContainer 
    thumbColor={props.thumbColor}
    thumbWidth={props.thumbWidth}
    thumbHeight={props.thumbHeight}
    thumbBorder={props.thumbBorder}
    thumbOutline={props.thumbOutline}
    thumbBorderRadius={props.thumbBorderRadius}
    trackColor={props.trackColor}
    trackWidth={props.trackWidth}
    trackHeight={props.trackHeight}
    trackBorder={props.trackBorder}
    trackOutline={props.trackOutline}
    trackBorderRadius={props.trackBorderRadius}
    >
    <input 
    type="range" 
    min={props.minValue || 0} 
    max={props.maxValue || 100} 
    value={values?.maxValue} 
    step={props.step || 1}
    list={props.list}
    className="slider" 
    onChange={(e) => {handleOnChange(e)}} 
   
    />
    <div className="value">{values?.maxValue}</div>
  </InputContainer>
  );
};
export default InputRange;
