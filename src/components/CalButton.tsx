import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  label: string;
  onPress: () => void;
}

interface State {}

export default class CalButton extends React.Component<Props, State> {
  render() {
    return <Button onClick={this.props.onPress}>{this.props.label}</Button>;
  }
}

const Button = styled.button`
  border: none;
  padding: 24px;
  background: darkgrey;
  font-size: 24px;
  color: white;
  transition: 0.2s;
  width: 33.3%;

  &:hover {
    background: grey;
    cursor: pointer;
  }

  &:active {
    background: orange;
  }
`;
