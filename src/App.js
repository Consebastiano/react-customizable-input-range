import "./App.css";
import InputRange from "./lib/components/input-range-single";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Default:</p>
        <InputRange></InputRange>
        <p>Example Style 1:</p>
        <InputRange thumbColor="white" thumbWidth="20px" thumbHeight="40px" thumbBorder="1px solid black" thumbBorderRadius="5px"></InputRange>
        <p>Example Style 2:</p>
        <InputRange
          thumbColor="orange"
          thumbWidth="20px"
          thumbHeight="20px"
          thumbBorder="1px solid green"
          trackBackgroundColor="green"
          trackProgressColor="orange"
          trackBorder="1px solid green"
        ></InputRange>
        <p>Example Style 3:</p>
        <InputRange
          thumbColor="red"
          thumbWidth="14px"
          thumbHeight="14px"
          thumbOutline="5px solid black"
          thumbBorderRadius="0px"
          trackWidth="100%"
          trackHeight="10px"
          trackBackgroundColor="grey"
          trackProgressColor="red"
          trackBorder="1px solid black"
          trackBorderRadius="0px"
        ></InputRange>
      </header>
    </div>
  );
}

export default App;
