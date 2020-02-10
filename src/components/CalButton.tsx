import * as React from "react";

interface Props {
  label: string;
  onPress: () => void;
}

interface State {}

export default class CalButton extends React.Component<Props, State> {
  render() {
    return <button onClick={this.props.onPress}>{this.props.label}</button>;
  }
}
