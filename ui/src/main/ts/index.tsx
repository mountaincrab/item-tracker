const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById("container")
);

class Calculator extends React.Component<CalculatorProps, CalculatorState> {

}

type CalculatorProps = {
  title: string
}

type CalculatorState = {
  temperature: number,
  scale: string
}
