import styled from "styled-components";

const sliderThumbStyles = (props) => `
  width: ${props.thumbWidth};
  height: ${props.thumbHeight};
  background: ${props.thumbColor};
  cursor: pointer;
  border: ${props.thumbBorder};
  outline: ${props.thumbOutline};
  border-radius: ${props.thumbBorderRadius};
`;

const sliderTrackStyles = (props) => `
  width: ${props.trackWidth};
  height: ${props.trackHeight};
  background: ${props.trackBackgroundColor};
  background-image: linear-gradient(${props.trackProgressColor}, ${props.trackProgressColor});
  background-size: 0% 100%;
  background-repeat: no-repeat;
  border: ${props.trackBorder};
  outline: ${props.trackOutline};
  border-radius: ${props.trackBorderRadius};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .value {
    font-size: 2rem;
  }
  .slider {
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
    &::-ms-thumb {
      ${(props) => sliderThumbStyles(props)}
    }

    ${(props) => sliderTrackStyles(props)}
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
    &::-moz-range-track {
    }
    &::-ms-track {
    }
  }
`;
